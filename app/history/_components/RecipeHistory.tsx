"use client"
import { GetAllRecipe } from '@/actions/GetAllRecipe'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { recipe } from '@/prisma/generated/client'
import { useQuery } from '@tanstack/react-query'
import { Bolt, Flame, Utensils } from 'lucide-react'
import React from 'react'

const RecipeHistory = () => {
    const query =   useQuery({
        queryKey :["recipe History"],
        queryFn :()=> GetAllRecipe(),
        refetchInterval : 10000
    })
    const dateToString= (date:Date)=>{
        const newDate = new Date(date)
        return newDate.toLocaleDateString("en-US" ,
            {
                year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,  
                
            }
        )
    }
    
    const getAllSteps = (recipe: { instruction: string }) => {
        const steps = recipe.instruction.split(/\d+\.\s+/).filter(Boolean);
        return steps;
    };
   
  return (
    <Accordion type='single' collapsible className='w-full'>
        {
            query.data?.map((recipe : recipe)=>(
                <AccordionItem value={recipe.id} key={recipe.id}>
                    <AccordionTrigger className='text-left  flex'>
                        <div className='flex flex-col items-start grow'>
                            <div className='flex items-center justify-between w-full'><p className="text-lg font-semibold">{recipe.title}</p> <Button className='mr-4 !no-underline' ><a href={`https://www.youtube.com/results?search_query=${recipe.title.split(" ").join("+")}`} target='_blank'>Look up on youtube</a></Button></div>
                            <span className="text-sm text-muted-foreground">{dateToString(recipe.date)}</span>
                            
                        </div>
                        

                        
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='space-y-4'>
                            <div className='flex flex-col'>
                                <span className='flex items-center gap-2'>
                                    <Utensils className='w-4 h-4 stroke-primary' />
                                    <span className='text-lg font-semibold'>Ingredients</span>
                                </span>
                                <ul className='list-disc pl-6'>
                                    {
                                        recipe.ingredients.split(", ").map((ingredient,index)=>(
                                            <li key={index}>{ingredient}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                            <span className='flex items-center gap-2'>
                                    <Bolt className='w-4 h-4 stroke-primary' />
                                    <span className='text-lg font-semibold'>Instructions</span>
                                </span> 
                               <ul className='list-decimal pl-6'>
                                    {
                                        getAllSteps(recipe).map((instruction,index)=>(
                                            <li key={index}>{instruction}</li>
                                        ))
                                    }
                               </ul>
                            </div>
                            <div className='flex items-center px-4 py-1 gap-2'>
                                <Flame className='w-6 h-6 fill-orange-600 stroke-orange-600' />
                                <span className='font-semibold'>{recipe.calorie} calories</span>
                                <Badge variant={recipe.vegan ? "default": "secondary"}>{recipe.vegan ? "vegan" : "non-vegan"}</Badge>
                            </div>
                            <div className='flex items-center px-4 py-1 gap-2'>
                                {
                                    recipe.tags.split(", ").map((tag,index)=>(
                                        <Badge key={index}>{tag}</Badge>
                                    ))
                                }   
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))
        }
    </Accordion>
  )
}

export default RecipeHistory