import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Egg, EggFriedIcon, Flame, Utensils } from 'lucide-react'
import React  from 'react'
interface RecipeProps {
    id : string
    userId: string
    title: string
    ingredients: string
    instruction: string
    vegan: boolean
    calorie: number | null
    tags: string,
    date : Date
  }

const RecipeCard = ({recipe}: {recipe? : RecipeProps} ) => {
   
    if(!recipe){
      return null
    }
    const { title, ingredients, instruction, vegan, calorie, tags } = recipe
    const tagList = tags.split(", ")
    const steps = instruction.split(/\d+\.\s/).filter(Boolean);
    const link = title.split(" ").join("+")
    
  return (
     <Card className='w-full'>
        <CardHeader className='border-b-2 flex '>
            <div className='flex items-center justify-between'>
            <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
                <Button className='p-2'><a href={`https://www.youtube.com/results?search_query=${link}`} target="_blank">Search in youtube</a></Button>
            </div>
            
        </CardHeader>
        
        <CardContent className='space-y-4 p-4'>
            <div className='py-1 px-4 space-y-5'>
                <h3 className='text-2xl font-semibold flex items-center gap-2'> <Utensils className='w-7 h-7 stroke-primary' /> Ingredients</h3>
                <ul className='list-disc pl-5 space-y-1'>
                    {
                      ingredients.split(", ").map((ingredient , index)=>(
                        <li key={index} className='font-semibold'>{ingredient}</li>
                      ))
                    }
                </ul>
            </div>
            <div className='py-1 px-4 space-y-5'>
                <h3 className='text-2xl font-bold flex items-center gap-2'>
                        <Egg className='w-7 h-7 stroke-primary'  />
                        Instructions
                </h3>
                <ol className='list-decimal pl-5 space-y-2'>
                    {
                      steps.map((step,i)=>(
                        <li key={i} className='pl-2 font-semibold'>{step}</li>
                      ))
                    }
                </ol>
            </div>
            <div className=" px-4 flex items-center gap-4">
          <span className="text-2xl font-semibold flex items-center gap-2">
            <Flame className="w-7 h-7 fill-orange-600 stroke-orange-600" />
            {calorie} calories
          </span>
          <Badge variant={vegan ? "default" : "secondary"}>{vegan ? "Vegan" : "Non-vegan"}</Badge>
        </div>
        <div className="flex flex-wrap gap-2 px-4">
          {tagList.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
))}
             </div>
        </CardContent>
    </Card>

  )
}

export default RecipeCard