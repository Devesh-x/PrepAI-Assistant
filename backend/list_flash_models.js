require("dotenv").config({ override: true });
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        console.log("Flash models found:");
        data.models.forEach(m => {
            if (m.name.includes("flash")) {
                console.log(m.name);
            }
        });

    } catch (error) {
        console.error("Error encountered:", error);
    }
}

listModels();
