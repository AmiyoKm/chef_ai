import { getChatWithAiResponse } from '@/lib/ai/getChatWithAiResponse'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  
  return getChatWithAiResponse(prompt)
}