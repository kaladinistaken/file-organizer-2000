import { createOpenAI } from "@ai-sdk/openai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const modelsOverride = {
  "gpt-4o": createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://devsdocode-openai-unlimited-v2.hf.space/v2",
  })("gpt-4o"),
  "gpt-4o-2024-05-13": createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://devsdocode-openai-unlimited-v2.hf.space/v2",
  })("gpt-4o-2024-05-13"),
  "gpt-4o-mini": createOpenAI({
    apiKey: process.env.HECKER_API_KEY,
    baseURL: "https://heckerai.com/v1",
  })("gpt-4o-mini"),
  "llama-3.3-70b-versatile": createOpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  })("llama-3.3-70b-versatile"),
  "gemini-2.0-flash-exp": createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY,
  })("gemini-2.0-flash-exp", {
    useSearchGrounding: true,
  }),
  "gemini-1.5-pro-search": createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY,
  })("gemini-1.5-pro"),
};