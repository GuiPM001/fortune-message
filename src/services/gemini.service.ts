import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPEN_AI_API_KEY!);

export const getNewMessage = async (currentLocale: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});

  const prompt = generateQuestion(currentLocale);

  const result = await model.generateContent(prompt);
  return result.response.text();
}

const generateQuestion = (currentLocale: string): string => {
  return `write a short fortune cookie message, with a different topic than the previous one, and reply to me with just the message (message must be in ${currentLocale}).`;
}