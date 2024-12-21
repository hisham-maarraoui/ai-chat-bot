// import { Message } from './../../node_modules/next/node_modules/postcss/lib/result.d';
// import Groq from "groq-sdk"

// const groq = new Groq({
//     apiKey: process.env.GROQ_API_KEY,
// });


// interface ChatMessage {
//     role: "system" | "user" | "assistant";
//     content: string;
// }


// export async function getGroqResponse(message: string) {
//     const messages: ChatMessage[] = [
//         { role: "system", content: "You are an academic expert, you always cite your sources and base your responses only on the context that you have been provided."},
//         { role: "user" , content: message },
//     ];

//     const response = await groq.chat.completions.create({
//         model: "llama-3.1-8b-instant",
//         messages
//     })

//     return response.choices[0].message.content;
// }




// // import os
// // from groq import Groq

// // client = Groq(
// //     api_key UNSTABLE_REVALIDATE_RENAME_ERROR.get('GROQ_API_KEY'),
// // )
// // chat_completion = client.chat.completions.create(
// //     messages=[
// //         {
// //             "role": "user",
// //             "content": "Explain the importance of low latency LLMs",
// //         }
// //     ],
// //     model="mixtral-8x7b-32768",
// // )
// // print(chat_completion.choices.choices[0].message.content)


