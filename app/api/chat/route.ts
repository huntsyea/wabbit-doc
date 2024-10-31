import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Ensure the API key is set in your environment
const openaiModel = openai('gpt-4o-mini');

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openaiModel,
    messages,
  });

  return result.toDataStreamResponse();
}
