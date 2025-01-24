"use client"
import React, { ReactNode, useState } from 'react'
import { SidebarProvider } from '../ui/sidebar'
import DesktopSidebar from '../DesktopSidebar'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"
import NextTopLoader from 'nextjs-toploader'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '../theme-provider'
const  AppProviders = ({children}: {children : ReactNode}) => {
  const [client] = useState(new QueryClient())
  const defaultOpen = true
  return (
  

    <QueryClientProvider client={client}>
      <NextTopLoader color="#50C878" height={5} showSpinner={false}  />
    <SidebarProvider defaultOpen={defaultOpen}>
    <DesktopSidebar />
    
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
         <ReactQueryDevtools initialIsOpen={false} /> 
    </SidebarProvider>
    </QueryClientProvider>
 
  )
}

export default AppProviders