"use client"
import useStore from '@/store/store';
import React from 'react'
import Typewriter from "typewriter-effect";


const ChatGreeting = () => {
    const {showChatText} =useStore()
    if(!showChatText){
        return null
    }
  return (
      <div className='flex flex-col flex-1 justify-center items-center gap-3'> 
        <h1 className="text-4xl">What are you thinking about?</h1>
        <h1 className="text-muted-foreground">
        <Typewriter
            options={{
            loop: true,
            autoStart: true,
            }}
            onInit={(typewriter) => {
            typewriter
                .typeString("I can help you with your recipes and other things")
                .pauseFor(5000)
                .deleteAll()
                .start();
            }}
        />
        </h1>
    </div>
  )
}

export default ChatGreeting