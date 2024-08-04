import React from "react";

import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
// import { Message } from "@/app/chatbot/page";
import { Card, CardBody } from "@nextui-org/card";
import { BotIcon } from "@/components/icons";

import { createRoot } from "react-dom/client";
import ReactMarkdown from "react-markdown";

export default function BotMessage({ message }: { message: string }) {
  return (
    <div className="flex flex-row items-center space-x-2 max-w-3xl">
      <Badge shape="rectangle">
        <Avatar
          icon={<BotIcon />}
          classNames={{
            base: "bg-gradient-to-br from-[#3B82F6] to-[#60A5FA]",
            icon: "text-black/80",
          }}
        />
      </Badge>

      <Card>
        <CardBody>
          <ReactMarkdown>{message}</ReactMarkdown>
        </CardBody>
      </Card>
    </div>
  );
}
