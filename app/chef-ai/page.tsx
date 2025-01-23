
import React  from 'react'
import UserInput from './_components/UserInput'

const page = () => {
  
  return (
    <div className='flex-1 flex flex-col min-h-screen  justify-center items-center'>
      <div className='flex flex-col w-full items-center justify-center gap-3'>
      <h1 className='text-4xl'>Hi, I'm Chef AI.</h1>
      <h1 className='text-muted-foreground'>Type ingredients to generate recipes</h1>
       <div>
        
       </div>
        <UserInput />
      
      </div>
    </div>
  )
}

export default page