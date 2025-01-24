"use server"
import { endOfMonth , startOfMonth , eachDayOfInterval , format } from 'date-fns'
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GetChart() {
     const {userId} = await auth()
        if(!userId){
            throw new Error("unauthenticated")
        }
        const now = new Date()
        const daysInMonth = eachDayOfInterval({
            start : startOfMonth(now),
            end : endOfMonth(now)
        }).map(date => format(date , "MMM-d").split("-").join(" "))
        const recipeDates = await prisma.recipe.findMany({
            where : {
                userId,
                date : {
                    lte : endOfMonth(now),
                    gte : startOfMonth(now)
                },
                
            },
            select : {
                date : true
            }
        })
        if(!recipeDates){
            return null
        }
        const recipeCount : Record<string,number> = {}
        recipeDates.forEach((recipeDate)=>{
            const day = format(recipeDate.date, "MMM-d").replace("-"," ")
            recipeCount[day] = (recipeCount[day] || 0) +1
        })
        const chartData = daysInMonth.map(date=>({
            date , 
            recipe :  recipeCount[date] || 0
           
        }))

        return chartData;
}