import DesktopSidebar from '@/components/DesktopSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    
  <div>

        {children}
  </div>
      
   
  )
}

export default layout