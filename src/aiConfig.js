import "dotenv/config.js"
import {GoogleGenerativeAI, SchemaType} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const schema = {
    description : "Today's Journal",
    type : SchemaType.OBJECT,
    properties:{
        title:{
            type: SchemaType.STRING,
            description: "Title of the journal",
            nullable: false
        },
        sentiment:{
            type: SchemaType.STRING,
            description: "Sentiment of the day which should be one of the following: Good, Bad, Great. dont produce anything other than these three",
            nullable: false
        },
        tags:{
            type: SchemaType.ARRAY,
            description: "Tags for the journal",
            items:{
                type: SchemaType.STRING
            }
        }
    },
    required : ["title","sentiment"]
}

export const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
    },
});

// old approach

// const messageHistory = [
//     {
//         role : "user",
//         parts : [{text:"Today was absolutely amazing! I got a promotion and celebrated with friends."}]
//     },
//     {
//         role: "model",
//         parts: [{text: "Great"}]
//     },
//     {
//         role : "user",
//         parts : [{text:"Work was okay today. Nothing extraordinary happened, but I feel productive."}]
//     },
//     {
//         role: "model",
//         parts: [{text: "Good"}]
//     },
//     {
//         role : "user",
//         parts : [{text:"I had a terrible day. My car broke down, and I missed an important meeting"}]
//     },
//     {
//         role: "model",
//         parts: [{text: "Bad"}]
//     }
// ]
//
