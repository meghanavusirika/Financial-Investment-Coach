"use client";
import React, { useMemo, useState } from "react";
import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
import { UserInfo } from "@/app/chatbot/page";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Select, SelectItem } from "@nextui-org/select";
import { BotIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";

export const occupations = [
  "student",
  "working",
  "unemployed",
  "retired",
  "other",
];
export const riskTolerances = ["convervative", "moderate", "aggressive"];
export const investmentDurations = [
  "Below 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "Above 10 years",
];

export default function Questionnaire({
  userInfo,
  setUserInfo,
  questionnaireFilled,
  setQuestionnaireFilled,
  input,
  setInput,
}: {
  userInfo: UserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  questionnaireFilled: boolean;
  setQuestionnaireFilled: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState<string>("");

  // const occupations = ["student", "working", "unemployed", "retired", "other"];

  const [income, setIncome] = useState("");
  const [netWorth, setNetWorth] = useState("");

  const [investmentGoals, setInvestmentGoals] = useState("");
  const [riskTolerance, setRiskTolerance] = useState("");
  // const riskTolerances = ["convervative", "moderate", "aggressive"];
  const [investmentDuration, setInvestmentDuration] = useState("");
  // const investmentDurations = ["short", "medium", "long"];

  const ageIsValid = useMemo(() => {
    if (age === "") return true;
    if (typeof Number(age) !== "number") return false;
    return 7 <= Number(age) && Number(age) <= 100 ? true : false;
  }, [age]);

  const handleOccupationSelectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOccupation(e.target.value);
  };

  const incomeIsValid = useMemo(() => {
    if (income === "") return true;
    if (typeof Number(income) !== "number") return false;
    return 0 <= Number(income) && Number(income) <= 1000000 ? true : false;
  }, [income]);

  const netWorthIsValid = useMemo(() => {
    if (netWorth === "") return true;
    if (typeof Number(netWorth) !== "number") return false;
    return 0 <= Number(netWorth) && Number(netWorth) <= 1000000 ? true : false;
  }, [netWorth]);

  const investmentGoalsIsValid = useMemo(() => {
    if (investmentGoals === "") return true;
    // TODO: Add more validation
    return true;
  }, [investmentGoals]);

  const handleRiskToleranceSelectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRiskTolerance(e.target.value);
  };

  const handleInvestmentDurationSelectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInvestmentDuration(e.target.value);
  };

  const handleQuestionnaireSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      ageIsValid &&
      incomeIsValid &&
      netWorthIsValid &&
      investmentGoalsIsValid
    ) {
      setUserInfo({
        age: Number(age),
        occupation: occupation,
        income: Number(income),
        netWorth: Number(netWorth),
        investmentGoals: investmentGoals,
        riskTolerance: riskTolerance,
        investmentDuration: investmentDuration,
      });
      setQuestionnaireFilled(true);
    }
  };

  const handleAction = (key: any) => {
    setInput(key as string);
  };
  return (
    <div className="flex flex-row items-center space-x-2 max-w-4xl">
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
        <CardHeader className="flex flex-col text-start text-pretty">
          <p>
            Hi! We’re excited to help you achieve your financial goals with
            personalized investment recommendations. To get started, we’d like
            to gather some important information about you. This will help us
            provide more accurate and tailored advice.
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="text-pretty">
          <p>Important Note:</p>

          <li>
            <b>Optional</b>: Filling out this questionnaire is entirely
            optional. You can skip any questions you don’t feel comfortable
            answering.
          </li>

          <li>
            <b>Privacy</b>: Your information is strictly confidential and will
            not be shared with anyone. We value your privacy and ensure that
            your data is secure.
          </li>

          <li>
            <b>Permission</b>: The information you provide will only be saved
            with your explicit permission.
          </li>

          <li>
            <b>Accuracy</b>: Providing complete and accurate information will
            enable us to offer recommendations that best suit your unique
            situation.
          </li>

          <br />

          <p>
            Let's get started with a few questions about your financial
            background and goals. This will only take a few minutes!
          </p>
        </CardBody>
        <Divider />
        <CardBody className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-2">
            <p>About you</p>
            <div className="flex flex-row space-x-2">
              <Input
                value={age}
                type="string"
                label="Age"
                variant="bordered"
                isInvalid={!ageIsValid}
                color={!ageIsValid ? "danger" : "success"}
                errorMessage="Enter a valid age (7-100)"
                onValueChange={setAge}
                className="max-w-xs"
                isDisabled={questionnaireFilled}
              />
              <Select
                label="Occupation"
                placeholder="Select an occupation"
                className="max-w-xs"
                selectedKeys={[occupation]}
                onChange={handleOccupationSelectionChange}
                isDisabled={questionnaireFilled}
              >
                {occupations.map((occupation) => (
                  <SelectItem key={occupation}>{occupation}</SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Financial Information</p>
            <div className="flex flex-row space-x-2">
              <Input
                value={income}
                type="string"
                label="Annual Income (CAD)"
                variant="bordered"
                isInvalid={!incomeIsValid}
                color={!incomeIsValid ? "danger" : "success"}
                errorMessage="Enter a valid annual income (0-1,000,000)"
                onValueChange={setIncome}
                className="max-w-xs"
                isDisabled={questionnaireFilled}
              />
              <Input
                value={netWorth}
                type="string"
                label="Net Worth (CAD)"
                variant="bordered"
                isInvalid={!netWorthIsValid}
                color={!netWorthIsValid ? "danger" : "success"}
                errorMessage="Enter a valid net worth (0-1,000,000)"
                onValueChange={setNetWorth}
                className="max-w-xs"
                isDisabled={questionnaireFilled}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Investment Preferences</p>
            <div className="flex flex-row space-x-2">
              <Input
                value={investmentGoals}
                type="string"
                label="Investment Goals"
                variant="bordered"
                isInvalid={!investmentGoalsIsValid}
                color={!investmentGoalsIsValid ? "danger" : "success"}
                // errorMessage="Enter a valid age (7-100)"
                onValueChange={setInvestmentGoals}
                className="max-w-xs"
                isDisabled={questionnaireFilled}
              />
              <Select
                label="Risk Tolerance"
                placeholder="Select risk tolerance"
                className="max-w-xs"
                selectedKeys={[riskTolerance]}
                onChange={handleRiskToleranceSelectionChange}
                isDisabled={questionnaireFilled}
              >
                {riskTolerances.map((riskTolerance) => (
                  <SelectItem key={riskTolerance}>{riskTolerance}</SelectItem>
                ))}
              </Select>
              <Select
                label="Investment Duration"
                placeholder="Select Investment Duration"
                className="max-w-xs"
                selectedKeys={[investmentDuration]}
                onChange={handleInvestmentDurationSelectionChange}
                isDisabled={questionnaireFilled}
              >
                {investmentDurations.map((investmentDuration) => (
                  <SelectItem key={investmentDuration}>
                    {investmentDuration}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="pt-2">
            <Button
              radius="sm"
              size="lg"
              className="w-36 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              onClick={(e) => handleQuestionnaireSubmit(e)}
              isDisabled={questionnaireFilled}
            >
              {questionnaireFilled ? "Form Submitted" : "Submit"}
            </Button>
          </div>
        </CardBody>
        {questionnaireFilled && (
          <>
            <Divider />
            <CardBody>
              <p>
                Thank you for your response. The collected information will be
                help us provide recommendations tailored to your financial
                situation and goals.
              </p>
              <p>
                <b>Feel free to ask your first question.</b> Here are some
                example queries to get you started:
              </p>
              <Listbox
                aria-label="Actions"
                selectionMode="single"
                onAction={handleAction}
              >
                <ListboxItem key="What are the best investment options for my risk tolerance?">
                  What are the best investment options for my risk tolerance?
                </ListboxItem>
                <ListboxItem key="Can you explain the benefits of investing in bonds?">
                  Can you explain the benefits of investing in bonds?
                </ListboxItem>
                <ListboxItem key="How can I start investing with a small amount of money?">
                  How can I start investing with a small amount of money?
                </ListboxItem>
                <ListboxItem key="What should I consider when investing for retirement?">
                  What should I consider when investing for retirement?
                </ListboxItem>
              </Listbox>
            </CardBody>
          </>
        )}
      </Card>
    </div>
  );
}
