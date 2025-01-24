import { getChatWithAiResponse } from '@/lib/ai/getChatWithAiResponse'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  console.log("@@PROMT",prompt);
  
  return getChatWithAiResponse(prompt)
}