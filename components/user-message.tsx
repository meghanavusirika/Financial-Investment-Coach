import React from "react";

import { Badge } from "@nextui-org/badge";
import { Avatar, AvatarIcon } from "@nextui-org/avatar";
// import { Message } from "@/app/chatbot/page";
import { Card, CardBody } from "@nextui-org/card";

export default function UserMessage({ message }: { message: string }) {
  return (
    <div className="flex flex-row items-center max-w-3xl space-x-2">
      <Card>
        <CardBody>
          <p className="tex-pretty">{message}</p>
        </CardBody>
      </Card>

      <Badge shape="rectangle">
        <Avatar
          icon={<AvatarIcon />}
          classNames={{
            base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
            icon: "text-black/80",
          }}
        />
      </Badge>
    </div>
  );
}
