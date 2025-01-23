import { cn } from '@/lib/utils'
import { ChefHatIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = ({fontSize = "text-2xl" , itemSize=20 , className } : {fontSize? : string , itemSize? :number , className? : string}) => {
  return (
    <div className={className}>

    <Link href={"/dashboard"} className={cn("font-semibold flex items-center gap-2 min-w-max", fontSize)}>
        <div className='rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2'>
            <ChefHatIcon size={itemSize} className='stroke-white' />

        </div>
        <div>
            <span className='bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent'>Chef</span>
            <span className='text-stone-700 dark:text-stone-300'>AI</span>
        </div>
    </Link>
    </div>
  )
}

export default Logo