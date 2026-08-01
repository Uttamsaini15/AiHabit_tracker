import { GoogleGenAI } from "@google/genai";

let client = null;
const getClient = () => {
    if (client) return client;
    const key = process.env.GEMINI_API_KEY;
    if(!key) return null;
    client = new GoogleGenAI({ apiKey: key });
    return client;
};

const MODEL = process.env.GEMINI_MODEL || "gemini-3.6-flash";

export const isAIEnabled = () => !!process.env.GEMINI_API_KEY;

export const parseJSON = (text) => {
    let cleaned = (text || "").trim();
    if(cleaned.startsWith("```json")){
        cleaned = cleaned.replace(/```json\n?/g,"").replace(/```\n?$/g, "");
    } else if (cleaned.startsWith("```")){
        cleaned = cleaned.replace(/```\n?/g,"");
    }
    return JSON.parse(cleaned.trim());
};

export const chatCompletion = async ({ system, user, temperature = 0.7 }) => {
    const c = getClient();
    if(!c){
        return {
            ok: false,
            content: "AI features are disabled - set GEMINI_API_KEY in the backend .env to enable real AI responses. Meanwhile, enjoy the app with mock responses!",
        };
    }
    try {
        const res = await c.models.generateContent({
            model: MODEL,
            contents: user,
            config: {
                systemInstruction: system,
                temperature,
            },
        });
        return { ok: true, content: ( res.text || "").trim()  };
    } catch (err) {
        console.error("Ai Error:", err.message);
        return { ok: false, content: "Ai request failed. Please try again later." };
    }
}

export const SYSTEM_PROMPTS = {
  weekly:
    "You are a warm, encouraging habit coach. Analyse the user's last 7 days of habit data and write a short, personalized weekly report (120-180 words). Cover wins, struggles, patterns, and concise encouragement. Mention specific habit names. Plain prose with line breaks, no markdown headers.",

  suggestion:
    "You are a helpful habit coach. Based on the user's goals, productive time, and past struggles, suggest exactly 3 personalized habits. Return ONLY valid JSON array of objects with keys: name, description, frequency ('daily'|'weekly'), category ('health'|'fitness'|'learning'|'mindfulness'|'productivity'|'social'|'finance'|'creative'|'other'), icon (single emoji), reason.No prose outside JSON",

  recovery:
    "You are a compassionate habit recovery coach. The user broke a streak. Write a 3-day recovery plan tailored to this specific habit. Start with empathetic message, followed by Day 1, Day 2, Day 3 steps, ending with encouragement.150-220 words total.",

  chat:
    "You are a helpful habit analysis assistant. Answer the user's question using ONLY the provided habit data as context. Be concise, direct, and cite actual habit names, days, and percentages from the data.",

  morning:
    "You are a warm, motivating friend. Write a single short morning message (30-60 words) using the user's actual habit names and current streaks.Mention 1-2 specific habits. Warm, energetic tone but not cheessy. Max 1 emoji."
};

