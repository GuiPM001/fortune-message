import { OpenAI  } from "openai";
import { languages } from "../enums/languages";

const key = process.env.REACT_APP_OPEN_AI_API_KEY;

const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true
});

export const getNewMessage = async (currentLocale: string) => {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: generateQuestion(currentLocale) },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

const generateQuestion = (currentLocale: string): string => {
  if (currentLocale === languages.pt)
    return "Gere uma mensagem de biscoito da sorte e me responda somente com a mensagem";

  return "Generate a fortune cookie message and reply to me with just the message";
}