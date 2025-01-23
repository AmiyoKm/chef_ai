
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const UserInput = () => {
  

  return (
    <div className='rounded-xl w-1/3 h-20 space-y-2'>
      <Textarea className='resize-none h-full'  />
      <Button className='w-full p-2'>Generate</Button>
    </div>
  )
}

export default UserInput