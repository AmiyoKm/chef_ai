"use server"

import generateRecipesByAI from "@/lib/ai/gemini"
import {prisma} from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
type recipe ={
    title : string
    ingredients : string
    Instruction: string
    vegan: boolean
    calorie: number
    tags: string[]
}

export async function GenerateRecipes(input: string) {
    const { userId } = await auth()
    if (!userId) {
        throw new Error("unauthenticated")
    }

    const response = await generateRecipesByAI(input)

    const recipes = response.recipes.map((recipe: recipe) => ({
        userId,
        title: recipe.title,
        ingredients: recipe.ingredients,
        instruction: recipe.Instruction,
        vegan: recipe.vegan,
        calorie: recipe.calorie,
        tags: recipe.tags.join(', ')
    }));

    await prisma.recipe.createMany({
        data: recipes
    })

    return recipes

}