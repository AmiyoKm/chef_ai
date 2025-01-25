"use server"

import {prisma} from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function AverageCalorie(){
    const {userId} = await auth()

    if(!userId){
        throw new Error("unauthenticated")
    }
    const average = await prisma.recipe.aggregate({
        where : {
            userId
        },
        _avg : {
            calorie : true
        }
    }
    )
    return average._avg.calorie ||0
}