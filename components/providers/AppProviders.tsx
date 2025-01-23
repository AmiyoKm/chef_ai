"use client"
import React, { ReactNode, useState } from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import DesktopSidebar from '../DesktopSidebar'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"
import NextTopLoader from 'nextjs-toploader'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const  AppProviders = ({children}: {children : ReactNode}) => {
  const [client] = useState(new QueryClient())
  const defaultOpen = false
  return (
  

    <QueryClientProvider client={client}>
      <NextTopLoader color="#50C878" height={5} showSpinner={false}  />
    <SidebarProvider defaultOpen={defaultOpen}>
    <DesktopSidebar />
    <SidebarTrigger />
        {children}
         <ReactQueryDevtools initialIsOpen={false} /> 
    </SidebarProvider>
    </QueryClientProvider>
 
  )
}

export default AppProviders