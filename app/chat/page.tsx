import React from 'react'
import ChatGreeting from './_components/ChatGreeting'
import ChatAI from './_components/ChatAI'
import SavedChat from './_components/SavedChat'

const ChatPage = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center min-h-screen'>
      
            <ChatGreeting />
            <SavedChat />

        <div className='w-2/3 h-5 flex-1 '>
            <ChatAI />
        </div>
    </div>
  )
}

export default ChatPage