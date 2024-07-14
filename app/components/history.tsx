import React, { useState } from "react";
import { Avatar, Button, List } from "antd";
import End from "./end";
import { Answer } from "../interfaces/common";

interface HistoryProps {
  attempts: Answer[][];
}

export const History: React.FC<HistoryProps> = ({ attempts }) => {
  const [activeComponent, setActiveComponet] = useState<string>("list");
  const [selectedAttempt, setSelectedAttemp] = useState<Answer[]>([]);

  const handleItemClick = (item: Answer[]) => {
    setSelectedAttemp(item);
    setActiveComponet("detail");
  };

  return (
    <div className="bg-white shadow-md rounded-lg border-blue-300 pl-8 pt-8 pb-4">
      {activeComponent === "list" && (
        <>
          <h1 className="text-4xl text-bold">
            History of Questions and Answers
          </h1>
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
          <Button type="primary" onClick={(): void => setActiveComponet("list")}>
            Back to History
          </Button>
          <End answers={selectedAttempt} />
        </>
      )}
    </div>
  );
};
