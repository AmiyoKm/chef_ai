import Logo from '@/components/Logo'
import React, { ReactNode } from 'react'

const layout = ({children}: {children : ReactNode}) => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center min-h-screen w-full'>
        <Logo itemSize={40} fontSize='text-4xl' />
        <div>   
            {children}
        </div>
    </div>
  )
}

export default layout