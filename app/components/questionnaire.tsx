import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Question } from "./question";
import End from "./end";

export const Questionnaire: React.FC = ({
  questions,
  attemptComplete,
}: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState<any>([]);

  useEffect(() => {
    if (currentQuestion === undefined) {
      attemptComplete(answers);
    }
  }, [currentQuestion]);

  const deleteAnswer = (id: number) => {
    const newAnswers = answers.filter((e: any) => e.question.id !== id);
    setAnswers([...newAnswers]);
  };

  const addAnswer = (answer: any) => {
    const newAnswers = [
      ...answers,
      { question: currentQuestion, answer: answer },
    ];
    setAnswers(newAnswers);
  };

  const findQuestion = (id: number) => {
    return questions.find((e: any) => e.id === id);
  };

  const checkRules = (answer: string): number | undefined => {
    if (currentQuestion.type === "boolean") {
      if (answer === "Yes") {
        return currentQuestion.rules.yes;
      } else if (answer === "No") {
        return currentQuestion.rules.no;
      }
    } else if (currentQuestion.type === "text") {
      if (+answer > currentQuestion.rules.val) {
        return currentQuestion.rules.yes;
      } else {
        return currentQuestion.rules.no;
      }
    }
  };

  const handleAnswer = (type: string, answer: string) => {
    if (type === "Back") {
      deleteAnswer(currentQuestion.id - 1);
      setCurrentQuestion(findQuestion(currentQuestion.id - 1));
    } else if (type === "Next") {
      const nextQuesId: number | undefined = checkRules(answer);
      addAnswer(answer);
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
