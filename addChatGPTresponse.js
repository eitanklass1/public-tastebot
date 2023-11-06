import { config } from 'dotenv';

// Load environment variables from the .env file
config();

import OpenAI from "openai";
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

export const addChatGPTresponse = async (business, messages) => {
    console.log("1")
    console.log(business)
    console.log(messages)
    console.log("1")
    if (messages.length == 0) {
        messages = [
            {"role": "system", "content": "You are a helpful yelp reviews assistant. You help people find provided information in yelp reviews. It's really important that you are concise and clear."},
            {"role": "user", "content": `The following yelp reviews:${business.reviews}. Answer the following question or questions based on the reviews. Please be as helpful as possible.`},
            {"role": "user", "content": `What is the ambiance like?`},
        ]
    }

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
    })

    messages = [...messages, response.choices[0].message]

    console.log(`response.choices[0].message`, response.choices[0].message)

    return messages
}

// module.exports = { addChatGPTresponse }