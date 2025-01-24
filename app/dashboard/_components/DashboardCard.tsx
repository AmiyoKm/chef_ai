import ReactCountupWrapper from '@/components/ReactCountupWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface Props {
    data? : number
    title : string
    icon : LucideIcon
    iconClassname? : string
} 

const DashboardCard = (props : Props) => {
   
  return (
    
    <Card className='flex-1 hover:scale-105 transition-all'>
        <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle className='text-lg font-semibold'>{props.title}</CardTitle>
            <props.icon className={cn("h-6 w-6" , props.iconClassname)} />
        </CardHeader>
        <CardContent>
            <div className='font-bold text-2xl'>
                <ReactCountupWrapper value={props.data!} />
                </div>
        </CardContent>
    </Card>
  )
}

export default DashboardCard