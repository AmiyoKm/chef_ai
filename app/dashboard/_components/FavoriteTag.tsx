"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import {  Star } from 'lucide-react'
import { FavoriteTagsData } from '@/actions/FavoriteTagsData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ReactCountupWrapper from '@/components/ReactCountupWrapper'

const FavoriteTags = () => {
   const query = useQuery({
        queryKey : ["tags"],
        queryFn :()=> FavoriteTagsData()
    })
    
  return (
    <Card className='flex-1 hover:scale-105 transition-all'>
        <CardHeader className='flex flex-row items-center justify-between' >
            <CardTitle className='text-lg'>Favorite Tag : <span className='text-primary'>{query.data?.mostFrequentTag ? query.data?.mostFrequentTag[0]: "none"}</span></CardTitle>
            <Star className='w-6 h-7 stroke-yellow-500 fill-yellow-500' />
        </CardHeader>
        <CardContent>
            <div className='flex-1 h-full'>
                <p className='font-semibold text-lg'>Total tags : <ReactCountupWrapper value={query.data?.allTagCounts ?? 0} /></p>
            </div>
        </CardContent>
    </Card>
  )
}

export default FavoriteTags