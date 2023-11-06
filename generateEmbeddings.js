import { config } from 'dotenv';

// Load environment variables from the .env file
config();

import fetch from "node-fetch"

export const generateEmbedding = async (prompt) => {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            input: prompt,
            model: "text-embedding-ada-002",
        }),
    })

    if (response.status != 200) {
        throw `Failed to generate embedding: ${response.statusText}`
    }

    const result = await response.json()

    return result.data[0].embedding
}

// console.log(await generateEmbedding("Hello my name is Joe"))