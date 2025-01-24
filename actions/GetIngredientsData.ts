"use server"

import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GetIngredientsData(){
    const {userId} = await auth()
    if(!userId){
        throw new Error("unauthenticated")
    }

    const ingredients = await prisma.recipe.findMany({
        where : {
            userId
        },
        select :{
            ingredients : true
        },
        
    })
    if(!ingredients) return 0
    let count = 0
      ingredients.forEach((ingredient : { ingredients: string})=> {
        ingredient.ingredients.split(", ").forEach(()=> {
            count ++
        })
    })
    return count
    
}