"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Questionnaire } from "./components/questionnaire";
import { History } from "./components/history";

import { QuestionData, Menuitem, Answer } from "./interfaces/common";

const { Header, Content } = Layout;

const items: Menuitem[] = [
  {
    key: "questions",
    label: "Questions",
  },
  {
    key: "history",
    label: "History",
  },
];

const data: QuestionData[] = [
  {
    id: 1,
    question: "Does your business operate in CA?",
    type: "boolean",
    rules: {
      yes: 2,
      no: undefined,
    },
  },
  {
    id: 2,
    question: "How many employees do you have?",
    type: "text",
    rules: {
      val: 100,
      yes: undefined,
      no: 3,
    },
  },
  {
    id: 3,
    question: "Do you serve food?",
    type: "boolean",
    rules: {
      yes: 4,
      no: 6,
    },
  },
  {
    id: 4,
    question: "Do you serve hot food?",
    type: "boolean",
    rules: {
      yes: 5,
      no: 5,
    },
  },
  {
    id: 5,
    question: "Are you open past midnight?",
    type: "boolean",
    rules: {
      yes: 6,
      no: 6,
    },
  },
  {
    id: 6,
    question: "Do you host live music?",
    type: "boolean",
    rules: {
      yes: undefined,
      no: undefined,
    },
  },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("questions");
  const [attempts, setAttempts] = useState<Answer[][]>([]);
  return (
    <Layout className="h-screen">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["questions"]}
          items={items}
          onSelect={(item): void => {
            setActiveTab(item.key);
          }}
        />
      </Header>
      <Content className="p-16">
        {activeTab === "questions" ? (
          <Questionnaire
            questions={data}
            attemptComplete={(attempt: Answer[]): void => {
              setAttempts([...attempts, attempt]);
            }}
          />
        ) : (
          <History attempts={attempts} />
        )}
      </Content>
    </Layout>
  );
};

export default App;
