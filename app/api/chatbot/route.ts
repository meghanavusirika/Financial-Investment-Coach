import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, userInfo } = await req.json();

  let systemPrompt =
    "You are an expert financial advisor chatbot with extensive knowledge in investment strategies, stock markets, and financial planning. " +
    "Your goal is to provide users with accurate, practical, and tailored investment advice based on their input. " +
    "Your primary goal is to assist users with personalized investment recommendations and educational responses based on their financial situation, goals, and risk tolerance. " +
    "Include disclaimers in your responses to remind users that the chatbot is not a substitute for professional financial advice." +
    "When a user's input is irrelevant to financial investment, gently steer the conversation back on track by providing an example of the type of information you need to give the best advice.";

  if (userInfo) {
    systemPrompt +=
      "Use the following information about the user to provide tailored recommendations: \n";
    systemPrompt += "Age: " + userInfo.age + ". \n";
    systemPrompt += "Occupation: " + userInfo.occupation + ". \n";
    systemPrompt += "Income: " + userInfo.income + ". \n";
    systemPrompt += "Net Worth: " + userInfo.netWorth + ". \n";
    systemPrompt += "Investment Goals: " + userInfo.investmentGoals + ". \n";
    systemPrompt += "Risk Tolerance: " + userInfo.riskTolerance + ". \n";
    systemPrompt +=
      "Investment Duration: " + userInfo.investmentDuration + ". \n";
  }

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
