import { config } from 'dotenv';
config(); // Load environment variables from the .env file
import OpenAI from "openai";
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY}) // Initialize openai object

export const addChatGPTresponse = async (business, messages) => {

    // Give AI some context
    if (messages.length == 0) {
        messages = [
            {"role": "system", "content": "You are a helpful yelp reviews assistant. You help people find relevant provided information in yelp reviews. It's really important that you are concise and clear."},
            {"role": "user", "content": `The following yelp reviews:${business.reviews}. Answer the following question or questions based on the reviews. Please be as helpful as possible.`},
            {"role": "user", "content": `What does this chatbot do?`},
        ]
    }

    // The response
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
    })

    // Add the chat message from ChatGPT to the existing array of messages
    messages = [...messages, response.choices[0].message]
    console.log(`response.choices[0].message`, response.choices[0].message)
    return messages
}
