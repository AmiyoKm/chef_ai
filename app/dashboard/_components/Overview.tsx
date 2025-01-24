"use client"
import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { GetAllRecipe } from '@/actions/GetAllRecipe'
import { GetChart } from '@/actions/GetChart'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const Overview = () => {
    const chartConfig : ChartConfig = {
        count : {
            label : "Recipes",
            color : "hsl(var(--chart-2))"
        }
    }     
        const query = useQuery({
        queryKey :["chartRecipe"] ,
        queryFn :()=> GetChart()
    })
  return (
    <div className='grow h-[530px] flex flex-col items-center justify-end'>
       {
        query.data &&
        <ChartContainer config={chartConfig}  className='h-[200px] w-full'>
        <BarChart  data={query.data } accessibilityLayer barSize={15} >
            <CartesianGrid vertical={false} />
            <XAxis dataKey={"date"} tickLine={false} tickMargin={6} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent className='w-[250px]' />}  />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar fillOpacity={0.8} dataKey={"recipe"} fill={`var(--color-count)`} radius={3} />
        </BarChart>
        </ChartContainer>
       }
    </div>
  )
}

export default Overview