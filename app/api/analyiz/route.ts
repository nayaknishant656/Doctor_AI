// /app/api/analyze/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

 require('dotenv').config();
export async function POST(req: Request) {
  try {
    const { parshedTextTemp }: { parshedTextTemp: string } = await req.json();
    console.log("pareshedTextTemp", parshedTextTemp);
     const apiKey  = "AIzaSyBWtXvD0m3C4o2HWKF2A8EzF_oTpSYQIHM";
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing in environment variables.");
      return NextResponse.json({ error: "API key missing" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `Behave like an experienced physician. Analyze the data, make it concise, and provide a summary. Give medical advice, suggestions, and a possible diagnosis based on the report. Additionally, Give suggegation to patients in Hindi Language with specification section ,and tell to patients what to eat , give the all the data in very readable formate to users , use section and use break lines give me in the JSON formate for the frontend\n\n"${parshedTextTemp}"`;
    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return NextResponse.json({ response });
  } catch (err) {
    console.error("API call failed:", err);
    return NextResponse.json({ error: "API failed" }, { status: 500 });
  }
}