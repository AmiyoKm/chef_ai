import React from 'react'
import RecipeHistory from './_components/RecipeHistory'

const page = () => {
  return (
    <div className='container mx-auto py-12 px-4'>
      <div className="text-4xl font-bold mb-8">Your Recipe History</div>
      <RecipeHistory />
    </div>
  )
}

export default page