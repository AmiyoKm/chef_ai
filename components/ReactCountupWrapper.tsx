"use client"
import React, { useEffect, useState } from 'react'
import CountUp from "react-countup"
const ReactCountupWrapper = ({value}: {value :number}) => {
    const [mounted ,setMounted] =useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])
    if(!mounted){
        return "0"
    }
  return (
    <CountUp duration={1} preserveValue end={value} decimals={0} />
  )
}

export default ReactCountupWrapper