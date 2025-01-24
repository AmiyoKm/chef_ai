"use server"
import { GoogleGenerativeAI } from "@google/generative-ai"

export async function getChatWithAiResponse(prompt: string) {
    const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
    
    const model = genAi.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
        generationConfig: {
            temperature: 1.5,
            topP: 0.9,
            topK: 40,
            maxOutputTokens: 1500
        },
        systemInstruction: "You are Chef AI. Provide  helpful cooking advice in plain text."
    })

    try {
        const chat = model.startChat({ history: [] })
        const result = await chat.sendMessageStream(prompt)
        
        return new Response(
            new ReadableStream({
                async start(controller) {
                    const encoder = new TextEncoder()
                    for await (const chunk of result.stream) {
                        controller.enqueue(encoder.encode(chunk.text()))
                    }
                    controller.close()
                }
            }),
            {
                headers: { "Content-Type": "text/plain" }
            }
        )
    } catch (error) {
        console.error("Error generating response:", error)
        throw new Error("Failed to generate AI response")
    }
}