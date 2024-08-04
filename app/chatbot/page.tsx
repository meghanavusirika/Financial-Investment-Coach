"use client";

import { Input } from "@nextui-org/input";
import { useEffect, useRef, useState } from "react";
import UserMessage from "@/components/user-message";
import BotMessage from "@/components/bot-message";
import Questionnaire from "@/components/questionnaire";

import { useChat } from "ai/react";
import {
  occupations,
  riskTolerances,
  investmentDurations,
} from "@/components/questionnaire";

export type Occupation = (typeof occupations)[number];
export type RiskTolerance = (typeof riskTolerances)[number];
export type InvestmentDuration = (typeof investmentDurations)[number];

export interface UserInfo {
  age: number;
  occupation: Occupation;
  // maritalStatus: "single" | "married" | "divorced" | "widowed" | "other";
  // dependents: number;

  income: number;
  netWorth: number;
  // housing: "yes" | "no";
  // loan: "yes" | "no";

  investmentGoals: string;
  riskTolerance: RiskTolerance;
  investmentDuration: InvestmentDuration;
}

export default function ChatBot() {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [questionnaireFilled, setQuestionnaireFilled] = useState(false);
  const isInitialRender = useRef(true);

  const {
    messages,
    input,
    setInput,
    handleSubmit,
    handleInputChange,
    isLoading,
  } = useChat({
    api: "/api/chatbot",
    body: {
      userInfo: userInfo,
    },
  });

  const scrollToBottom = () => {
    if (!questionnaireFilled) {
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col overflow-y-auto p-4 h-[690px] w-5/6 mx-auto space-y-4">
        <Questionnaire
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          questionnaireFilled={questionnaireFilled}
          setQuestionnaireFilled={setQuestionnaireFilled}
          input={input}
          setInput={setInput}
        />
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === "user" ? (
              <div className="flex justify-end">
                <UserMessage message={message.content} />
              </div>
            ) : (
              <div className="flex justify-start">
                <BotMessage message={message.content} />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex flex-row justify-center mx-auto w-5/6 h-12">
        <form onSubmit={handleSubmit} className="w-full">
          <Input
            type="text"
            variant="underlined"
            placeholder={
              !questionnaireFilled
                ? "Submit Questionnaire"
                : "Type a message..."
            }
            value={input}
            onChange={handleInputChange}
            isClearable
            disabled={isLoading || !questionnaireFilled}
          />
        </form>
      </div>
    </div>
  );
}
