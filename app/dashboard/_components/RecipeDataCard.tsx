"use client"
import { GetAllRecipeCount } from '@/actions/GetAllRecipeCount'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import DashboardCard from './DashboardCard'
import { CookingPot } from 'lucide-react'

const RecipeDataCard = () => {
   const query = useQuery({
        queryKey : ["recipe"],
        queryFn :()=> GetAllRecipeCount()
    })

    
  return (
    <DashboardCard data={query.data} title='Recipes' icon={CookingPot} iconClassname='stroke-primary fill-primary' />
  )
}

export default RecipeDataCard