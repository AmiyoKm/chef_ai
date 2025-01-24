
import React  from 'react'
import UserInput from './_components/UserInput'
import Greeting from './_components/Greeting'

const page = () => {
  
  return (
    <div className='flex-1 flex flex-col justify-center min-h-screen items-center'>
      <div className='flex flex-col w-full items-center justify-center gap-3'>
            <Greeting />
       <div>
        
       </div>
        <UserInput />
      
      </div>
    </div>
  )
}

export default page