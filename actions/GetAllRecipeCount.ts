"use server"

import {prisma} from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GetAllRecipeCount(){
     const {userId} = await auth()
    
        if(!userId){
            throw new Error("unauthenticated")
        }

         return prisma.recipe.count({
            where : {
                userId
            }
        }) || 0
           
}