import { OpenAI  } from 'openai';

const key = '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';

const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true
});

export const getNewMessage = async () => {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Get me a helpful message" },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion);
  console.log(completion.choices[0]);

  return completion.choices[0].message.content;
}