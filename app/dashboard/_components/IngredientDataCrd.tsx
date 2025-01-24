"use client"
import { GetIngredientsData } from '@/actions/GetIngredientsData'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import DashboardCard from './DashboardCard'
import { Carrot } from 'lucide-react'

const IngredientDataCrd = () => {
    const query = useQuery({
        queryKey : ["ingredients"],
        queryFn :()=> GetIngredientsData()
    })
  return (
    <DashboardCard data={query.data} title="Total ingredients" icon={Carrot} iconClassname='stroke-orange-500 fill-orange-500' />
  )
}

export default IngredientDataCrd