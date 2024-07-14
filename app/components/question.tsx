import { useState } from "react";
import { Card, Button, Input, Radio } from "antd";
import { QuestionData } from "../interfaces/common";

interface QuestionProps {
  question: QuestionData;
  onAnswer: (type: string, value?: string) => void;
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [value, setValue] = useState("");
  const [position, setPosition] = useState(null);

  return (
    <Card className="p-16 bg-white shadow-md rounded-lg border-blue-300 ">
      <p className="text-4xl">Question: {question.question}</p>
      {question.type === "boolean" && (
        <div className="w-100 flex ml-4 mt-12">
          <Radio.Group
            value={value}
            onChange={(e) => setValue(e.target.value)}
            size="large"
            buttonStyle="solid"
          >
            <Radio.Button value="Yes">Yes</Radio.Button>
            <Radio.Button value="No">No</Radio.Button>
          </Radio.Group>
        </div>
      )}
      {question.type === "text" && (
        <Input
          className="mt-4"
          size="large"
          placeholder="large size"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <div className="w-100 flex ml-4 mt-12">
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
          disabled={!value}
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
