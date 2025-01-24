import React from 'react'
import RecipeDataCard from './_components/RecipeDataCard'
import IngredientDataCrd from './_components/IngredientDataCrd'
import FavoriteTags from './_components/FavoriteTag'
import AverageCalorieCard from './_components/AverageCalorie'
import Overview from './_components/Overview'
import { getMonth } from 'date-fns'
const Dashboard = () => {
  const now = new Date().toLocaleDateString("en-Us",{
    month : "long"
  })

  return (
    <div className='flex flex-1 flex-col min-h-[89vh] '>
      <h1 className='font-bold text-4xl px-2 py-4'>Dashboard</h1>
      <div className='h-auto flex items-center justify-between gap-3 mx-4'>
        <RecipeDataCard/>
        <IngredientDataCrd />
        <FavoriteTags/>
        <AverageCalorieCard />
      </div>
      <div className='flex flex-col   flex-1 p-6'>
        <h1 className='text-xl font-bold '>Your overview of the month {now}</h1>
        <div className='flex items-center justify-center'>
      <Overview />

        </div>

      </div>
    </div>
  )
}

export default Dashboard