import { SmileOutlined } from "@ant-design/icons";

export const End: React.FC = ({ answers }: any) => {
  return (
    <div className="flex justify-center items-center border-black o">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <div className="flex justify-center items-center text-5xl">
          <SmileOutlined className="mb-4" />
          <p className="font-semibold mb-6 ml-2">Thank you</p>
        </div>
        {answers.map((ans: any) => (
          <div className="mb-4 text-xl	">
            <p className="font-normal ">{ans.question.question}</p>
            <p className="font-semibold text-green-400">{ans.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default End;
