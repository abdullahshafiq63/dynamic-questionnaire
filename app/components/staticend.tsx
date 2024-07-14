import { SmileOutlined } from "@ant-design/icons";

const StaticEnd: React.FC = () => {
  // Hardcoded questions and answers
  const answers = [
    { question: "Does your business operate in CA?", answer: "Yes" },
    { question: "How many employees do you have?", answer: "50" },
    { question: "Do you serve food?", answer: "Yes" },
    { question: "Do you serve hot food?", answer: "No" },
    { question: "Are you open past midnight?", answer: "No" },
    { question: "Do you host live music?", answer: "Yes" },
  ];

  return (
    // <div className="flex justify-center items-center border-black o">
    //   <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
    //     <div className="flex justify-center items-center text-5xl">
    //       <SmileOutlined className="mb-4" />
    //       <p className="font-semibold mb-6 ml-2">Thank you</p>
    //     </div>
    //     {answers.map((ans, index) => (
    //       <div key={index} className="mb-4 text-xl">
    //         <p className="font-normal">{ans.question}</p>
    //         <p className="font-semibold text-green-400">{ans.answer}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <p>kdnlfksndklfnlnsdlfk</p>
  );
};

export default StaticEnd;