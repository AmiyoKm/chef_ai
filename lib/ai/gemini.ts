"use server"
import { GoogleGenerativeAI, GenerationConfig, SchemaType } from "@google/generative-ai";

const generationConfig: GenerationConfig = {
  temperature: 0.7,
  topP: 0.9,
  topK: 40,
  maxOutputTokens: 2048,
  responseMimeType: "application/json",
  responseSchema: {
    type: SchemaType.OBJECT,
    description: "Return a list of recipes based on user-provided ingredients.",
    properties: {
      recipes: {
        type: SchemaType.ARRAY,
        items: {
          type: SchemaType.OBJECT,
          properties: {
            title: { type: SchemaType.STRING },
            ingredients: { type: SchemaType.STRING },
            Instruction: { type: SchemaType.STRING }, 
            vegan: { type: SchemaType.BOOLEAN },
            calorie: { type: SchemaType.INTEGER }, 
            tags: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING}, 
            },
          },
        },
      },
    },
  },
};

export const generateRecipes = async (ingredients: string) => {
  const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

  const model = genAi.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `
    You are a chef. Your name is chefAI.
    Generate 3-5 recipes using these ingredients: ${ingredients}
    
    For each recipe provide:
    - title: Creative recipe name
    - ingredients: Comma-separated list (include quantities)
    - Instruction: Step-by-step instructions (numbered)
    - vegan: Boolean
    - calorie: Estimated calories per serving
    - tags: Array of categories (e.g., ["dinner", "quick"])
    
    Return valid JSON matching the provided schema exactly.`,
  });

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: "Generate recipes" }] }],
    generationConfig,
  });

  return JSON.parse(result.response.text());
};

export default generateRecipes;