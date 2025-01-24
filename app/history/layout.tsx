import BreadcrumbHeader from '@/components/BreadcrumbHeader'
import { ModeToggle } from '@/components/ModeToggle'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

const layout = ({children}: {children : ReactNode}) => {
  return (
    
        <div className='flex flex-col flex-1 min-h-screen py-4'>
            <header className='flex items-center justify-between px-6'>
            <BreadcrumbHeader />
                <div className='gap-4 flex items-center'>
                    <ModeToggle />
                    <SignedIn >
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <div className='overflow-auto'>
                <div className='flex-1 container py-4 text-accent-foreground'>
                    {children}
                </div>
            </div>
        </div>
 
  )
}

export default layout