import { recipe } from "@/prisma/generated/client"
import {create } from "zustand"

type Message = {
    content : string
    isUser: boolean
  }


type StoreState = {
    showText : boolean,
    showChatText : boolean
    setShowText : ()=> void
    setChatText : ()=> void
    recipes : recipe[],
    setRecipes: (recipes: recipe[]) => void
    messages: Message[];
    addMessage: (message: Message) => void;
    updateLastMessage: (content: string) => void;

}

const useStore =  create<StoreState>((set)=>({
    showText : true,
    showChatText : true,
    messages : [],
    recipes : [],
    setShowText :()=> {
            set({showText : false})
    },
    setChatText : ()=> {
        set({showChatText : false})
    },
    setRecipes : (newRecipe : recipe[])=> {
        set((state)=> ({
            recipes : [...state.recipes ,...(Array.isArray(newRecipe) ? newRecipe : [newRecipe])]
        }))
    },
    addMessage : (message : Message)=> set(state => ({
        messages : [...state.messages,message]
    })),
    updateLastMessage: (content) => set((state) => {
        if (state.messages.length === 0) return state;
        const lastIndex = state.messages.length - 1;
        return {
            messages: [
                ...state.messages.slice(0, lastIndex),
                { ...state.messages[lastIndex], content }
            ]
        };
    })

}))

export default useStore