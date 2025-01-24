"use client"
import { GenerateRecipes } from '@/actions/GenerateRecipes'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useMutation } from '@tanstack/react-query'
import { Loader2Icon } from 'lucide-react'
import React, { Suspense,  useState } from 'react'
import RecipeCard from './RecipeCard'
import useStore from '@/store/store'

const UserInput = () => {
  const {setShowText , recipes, setRecipes} = useStore()

    const [input , setInput] = useState("")
  const mutation =  useMutation({
      mutationKey : ["userInput"],
      mutationFn : GenerateRecipes,
      onSuccess : (data)=>{
        setRecipes(data)
      }
    })
   
  return (
    <>
    <div className='w-1/2 h-auto space-y-4' >
      {
        recipes && (
          recipes.map((recipe)=>(
              


                  <RecipeCard recipe={recipe} />

              
          ))
        )
      }
    </div>
    <div className='rounded-xl w-1/2 h-20 space-y-2'>
      <Textarea className='resize-none h-full rounded-l p-2' value={input}  onChange={(e)=> setInput(e.target.value)} placeholder='What ingredients do you have at you disposal?' />
       <Button className='w-full p-2' size={"lg"} onClick={()=>{

         mutation.mutate(input)
         setShowText()

        }} disabled={mutation.isPending || input === ""}>Generate{mutation.isPending && <Loader2Icon className='stroke-white animate-spin' />}</Button>
    </div>
        </>
  )
}

export default UserInput