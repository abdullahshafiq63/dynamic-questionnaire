import React, { useState } from "react";
import { Avatar, Button, List } from "antd";
import End from "./end";

interface Answer {
  question: any;
  answer: string;
}

interface HistoryProps {
  answers: Answer[];
}

export const History: React.FC<HistoryProps> = ({ attempts }: any) => {
  const [activeComponent, setActiveComponet] = useState("list");
  const [selectedAttempt, setSelectedAttemp] = useState(null);

  const handleItemClick = (item: any) => {
    setSelectedAttemp(item);
    setActiveComponet("detail");
  };

  return (
    <div>
      {activeComponent === "list" && (
        <>
          <h1 className="text-4xl text-bold">History of Questions and Answers</h1>
          <List
            itemLayout="horizontal"
            dataSource={attempts}
            renderItem={(item, index) => (
              <List.Item onClick={() => handleItemClick(item)}>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={`Attempt # ${index + 1}`}
                  description="Questions along with their answers are maintained in this history item"
                />
              </List.Item>
            )}
          />
        </>
      )}
      {activeComponent === "detail" && (
        <>
          <Button type="primary" onClick={() => setActiveComponet("list")}>
            Back to History
          </Button>
          <End answers={selectedAttempt} />
        </>
      )}
    </div>
  );
};
