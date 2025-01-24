"use client"
import { GetAllRecipeCount } from '@/actions/GetAllRecipeCount'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import DashboardCard from './DashboardCard'
import { CookingPot, Flame } from 'lucide-react'
import { AverageCalorie } from '@/actions/AverageCalorie'

const AverageCalorieCard = () => {
   const query = useQuery({
        queryKey : ["recipe"],
        queryFn :()=> AverageCalorie()
    })

    
  return (
    <DashboardCard data={query.data} title='Average Calorie' icon={Flame} iconClassname='stroke-orange-500 fill-orange-500' />
  )
}

export default AverageCalorieCard