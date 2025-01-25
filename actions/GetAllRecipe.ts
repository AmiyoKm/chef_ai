"use server"

import {prisma} from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GetAllRecipe(){
    const {userId} = await auth()

    if(!userId){
        throw new Error("unauthenticated")
    }
    

    const recipes = await prisma.recipe.findMany({
        where : {
            userId,
        },
        orderBy : {
            date : "desc"
        }
        

    })
    if(!recipes) return null
    return recipes
}