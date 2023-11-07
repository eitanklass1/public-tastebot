import { OpenAI } from "openai";
const openai = new OpenAI({apiKey: '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'});
const response = await openai.models;

console.log(response)