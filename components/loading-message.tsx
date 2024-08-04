import React from "react";

import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { BotIcon } from "@/components/icons";
import { Skeleton } from "@nextui-org/skeleton";

export default function LoadingMessage() {
  return (
    <div className="justify-start flex flex-row items-center space-x-2">
      <Badge shape="rectangle">
        <Avatar
          icon={<BotIcon />}
          classNames={{
            base: "bg-gradient-to-br from-[#3B82F6] to-[#60A5FA]",
            icon: "text-black/80",
          }}
        />
      </Badge>

      <Card className="w-[400px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-7 rounded-lg bg-default-300"></div>
        </Skeleton>
      </Card>
    </div>
  );
}
