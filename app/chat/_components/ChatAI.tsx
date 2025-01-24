"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleStream } from "@/lib/ai/handleStream";
import useStore from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { ArrowUp } from "lucide-react";
import React, { useState } from "react";

const ChatAI = () => {
  const { setChatText, addMessage } = useStore();
  const [input, setInput] = useState("");
  const mutate = useMutation({
    mutationKey: ["chat"],
    mutationFn: handleStream,
    onSuccess: async (reader) => {
     addMessage({content: "", isUser : false})

     const decoder = new TextDecoder()
     let aiResponse= ""
    
        while(true){
            const {done , value} = await reader.read()
            if(done) break;

            aiResponse += decoder.decode(value , {stream : true})

            useStore.getState().updateLastMessage(aiResponse);
        }

    },
  });
  const handleSubmit = () => {
    if (!input.trim()) return;


    addMessage({ content: input, isUser: true });


    mutate.mutate(input);
    setInput("");
  };
  return (
    <div className="w-full flex items-center rounded-full ">
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Ask me anything...'
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        className="rounded-full border-0 border-none"
      />
      <Button
      disabled={mutate.isPending}
        className="h-full border-none rounded-full"
        onClick={() => {
          setChatText();
          handleSubmit()
        }}
      >
        <ArrowUp className="w-5 h-5 stroke-white" />
      </Button>
    </div>
  );
};

export default ChatAI;
