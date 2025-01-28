const OpenAI = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY
});

const fields = "name, email, phone, address, links, summary, experience, education, skills, projects, certifications, languages, references.";

async function main(input) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a resume builder. You will send the resume data based in the input i will send to you as a json with the following keys/fields:" +
        fields + " links being an array of strings. experience and education must have a start and end date. The rest are strings." 
       },
      {
        role: "user",
        content: input
      }],
      model: "deepseek-chat",
    });
  
    return completion.choices[0].message.content;
  }
  
  module.exports = main;