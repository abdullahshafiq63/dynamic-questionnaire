import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Question } from "./question";
import End from "./end";
import { QuestionData, Answer } from "../interfaces/common";

export interface QuestionnaireProps {
  questions: QuestionData[];
  attemptComplete: (answers: Answer[]) => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({
  questions,
  attemptComplete,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionData | undefined
  >(questions[0]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    if (currentQuestion === undefined) {
      attemptComplete(answers);
    }
  }, [currentQuestion]);

  const deleteAnswer = (id: number) => {
    const newAnswers = answers.filter((e: Answer) => e.question.id !== id);
    setAnswers([...newAnswers]);
  };

  const addAnswer = (answer: string) => {
    const newAnswers: Answer[] = [
      ...answers,
      { question: currentQuestion as QuestionData, answer: answer },
    ];
    setAnswers(newAnswers);
  };

  const findQuestion = (id: number): QuestionData | undefined => {
    return questions.find((e: QuestionData) => e.id === id);
  };

  const checkRules = (answer: string): number | undefined => {
    if (currentQuestion?.type === "boolean") {
      if (answer === "Yes") {
        return currentQuestion.rules.yes;
      } else if (answer === "No") {
        return currentQuestion.rules.no;
      }
    } else if (currentQuestion?.type === "text" && currentQuestion.rules.val) {
      if (+answer > currentQuestion.rules.val) {
        return currentQuestion.rules.yes;
      } else {
        return currentQuestion.rules.no;
      }
    }
  };

  const handleAnswer = (type: string, value?: string): void => {
    if (type === "Back" && currentQuestion) {
      deleteAnswer(currentQuestion.id - 1);
      setCurrentQuestion(findQuestion(currentQuestion.id - 1));
    } else if (type === "Next" && value) {
      const nextQuesId: number | undefined = checkRules(value);
      addAnswer(value);
      setCurrentQuestion(nextQuesId ? findQuestion(nextQuesId) : undefined);
    }
  };

  return (
    <div>
      {currentQuestion !== undefined ? (
        <Question question={currentQuestion} onAnswer={handleAnswer} />
      ) : (
        <>
          <Button
            className="py-4"
            type="primary"
            onClick={() => {
              setAnswers([]);
              setCurrentQuestion(questions[0]);
            }}
          >
            Start Again
          </Button>
          <End answers={answers} />
        </>
      )}
    </div>
  );
};
