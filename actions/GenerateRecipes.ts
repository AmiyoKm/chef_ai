"use server"

import generateRecipesByAI from "@/lib/ai/gemini"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { recipe } from "@prisma/generated/client"

export async function GenerateRecipes(input : string){
    const {userId} = await auth()
    if(!userId){
        throw new Error("unauthenticated")
    }

    const response   =await generateRecipesByAI(input)
    
    const recipes : recipe[]= response.recipes.map((recipe :any) => ({
        userId,
        title: recipe.title,
        ingredients: recipe.ingredients,
        instruction: recipe.Instruction,
        vegan: recipe.vegan,
        calorie: recipe.calorie,
        tags: recipe.tags.join(', '), // Convert tags array to a comma-separated string
    }));
    
   await prisma.recipe.createMany({
        data : recipes
    })

   return recipes

}