import { OpenAI } from "openai";
import fs  from 'fs'

const reviews = fs.readFileSync('reviews.txt', 'utf-8');
const openai = new OpenAI({apiKey: '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'});

const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are a helpful yelp reviews assistant. You help people find provided information in yelp reviews."},
        {"role": "user", "content": `The following yelp reviews:

${reviews}

Answer the following question or questions based on the reviews.

Should I go to steam for a date?`}],
});

console.log(response.choices[0].message.content);