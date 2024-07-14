import { Card, Button, Input } from "antd";
import { useState } from "react";

export const Question: React.FC<{
  question: any;
  onAnswer: (answer: string) => void;
}> = ({ question, onAnswer }) => {
  const [value, setValue] = useState("");

  return (
    <Card className="p-16 bg-slate-200">
      <p className="text-4xl">Question: {question.question}</p>
      {question.type === "boolean" && (
        <div className="w-100 flex justify-center align-center mt-12">
          <Button
            className="w-40 mr-8"
            size="large"
            danger
            onClick={() => setValue("No")}
          >
            No
          </Button>
          <Button
            className="w-40"
            type="primary"
            size="large"
            onClick={() => setValue("Yes")}
          >
            Yes
          </Button>
        </div>
      )}
      {question.type === "text" && (
        <Input
          size="large"
          placeholder="large size"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <div className="w-100 flex justify-center align-center mt-12">
        {question.id !== 1 && (
          <Button
            className="w-40 mr-8"
            size="large"
            danger
            onClick={() => {
              onAnswer("Back");
              setValue("");
            }}
          >
            Back
          </Button>
        )}
        <Button
          className="w-40"
          type="primary"
          size="large"
          onClick={() => {
            onAnswer("Next", value);
            setValue("");
          }}
        >
          Next
        </Button>
      </div>
    </Card>
  );
};
