// import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import Groq from "groq-sdk"
// import { NextResponse } from "next/server";

// Create an OpenAI API client

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
    // Extract the `prompt` from the body of the request
    const { messages } = await req.json();
    console.log('messages:', messages);


    // Ask Groq for a streaming chat completion given the prompt
    const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
            {
                role: "system",
                content: "You are an academic expert, you always cite you sources and base your responses only on the context that you have been provided. Do not include dates in citations. Do not include dates in citations."
            },
            ...messages,
        ],
        stream: true,
        temperature: 1,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);

}




