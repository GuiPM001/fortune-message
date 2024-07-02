import { languages } from "../enums/languages";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPEN_AI_API_KEY!);

export const getNewMessage = async (currentLocale: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = generateQuestion(currentLocale);

  const result = await model.generateContent(prompt);
  return result.response.text();
}

const generateQuestion = (currentLocale: string): string => {
  if (currentLocale === languages.pt)
    return "Gere uma mensagem de biscoito da sorte e me responda somente com a mensagem";

  return "Generate a fortune cookie message and reply to me with just the message";
}