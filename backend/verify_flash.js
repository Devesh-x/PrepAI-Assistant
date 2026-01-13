require("dotenv").config({ override: true });
const { GoogleGenAI } = require("@google/genai");

const key = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: key });

const models = ["gemini-flash-latest", "gemini-2.0-flash", "models/gemini-flash-latest"];

async function test() {
    for (const m of models) {
        process.stdout.write(`Testing ${m}... `);
        try {
            await ai.models.generateContent({
                model: m,
                contents: "Hello",
            });
            console.log("SUCCESS");
        } catch (e) {
            console.log("FAILED: " + (e.message || e));
        }
    }
}
test();
