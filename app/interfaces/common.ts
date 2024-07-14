export interface QuestionData {
  id: number;
  question: string;
  type: "boolean" | "text";
  rules: {
    yes?: number;
    no?: number;
    val?: number;
  };
}

export interface Menuitem {
  key: string;
  label: string;
}

export interface EndProps {
  answers: Answer[];
}

export interface Answer {
  question: QuestionData;
  answer: string;
}
