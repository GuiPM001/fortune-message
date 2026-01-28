import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.REACT_APP_GEMINI_API_KEY!});

export const getNewMessage = async (currentLocale: string) => {
  const prompt = generateQuestion(currentLocale);

  const result = await ai.models.generateContent({
    model: process.env.REACT_APP_GEMINI_MODEL!,
    contents: prompt
  });

  return result.text ?? "";
}

const generateQuestion = (currentLocale: string): string => {
  const uniqueifier = Math.random();
  return `write a short fortune cookie message, and reply to me with just the message (message must be in ${currentLocale}). Uniqueifier: ${uniqueifier}`;
}