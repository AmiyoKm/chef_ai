"use server"

import {prisma} from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
type recipe = {
    tags : string
}
type acc= Record<string, number>


export async function FavoriteTagsData(){
    const {userId} = await auth()
        if(!userId){
            throw new Error("unauthenticated")
        }

    const recipes = await prisma.recipe.findMany({
        where : {
            userId
        },
        select : {
            tags : true
        }
    })
    if(!recipes){
        return { 
            mostFrequentTag : ["No Tags", 0],
            allTagCounts : 0
        }
    }
    const allTags = recipes.flatMap((recipe : recipe) => recipe.tags.split(", "))

    const tagsCount : Record<string , number> = allTags.reduce((acc: acc ,tag : string)=> {
        acc[tag] = (acc[tag] || 0) +1
        return acc
    },{} as Record<string , number>)

    const sortedTags = Object.entries(tagsCount).sort(([,B] , [,A])=> B -A )

    return {
        mostFrequentTag: sortedTags[0], 
        allTagCounts: Object.entries(tagsCount).reduce((acc : number ,tag : [string,number])=> acc+tag[1] ,0)
    }

}