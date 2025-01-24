"use client"
import useStore from '@/store/store'
import React from 'react'
import { cn } from '@/lib/utils' 

const SavedChat = () => {
    const { messages } = useStore()

    
    return (
        <div className="flex flex-col grow space-y-4 p-4 max-w-4xl mx-auto w-full">         
            {messages.map((message, i) => (
                <div 
                    key={i}
                    className={cn(
                        "flex",
                        message.isUser ? "justify-end" : "justify-start"
                    )}
                >
                    <div className={cn(
                        "max-w-[80%] lg:max-w-[70%] px-4 py-1 rounded-lg shadow-sm",
                        message.isUser 
                            ? "bg-primary text-white ml-auto"
                            : "bg-gray-100 text-gray-800 mr-auto",
                        i === messages.length - 1 ? "mb-4" : ""
                    )}>
                        <div className="text-sm break-words whitespace-pre-wrap">
                            {message.content}
                        </div>
                        <div className={cn(
                            "text-xs mt-2",
                            message.isUser 
                                ? "text-blue-100" 
                                : "text-gray-500"
                        )}>
                           
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SavedChat