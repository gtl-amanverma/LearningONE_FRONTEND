import { topic, TTopicType } from "@/mocks/question";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";

type props = {
  onClick?: (data: TTopicType) => void;
};

const TopicCard = ({ ...props }: props) => {
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  return (
    <div className="flex flex-wrap items-center justify-start p-2 gap-4">
      {topic.map((item, index) => {
        return (
          <div
            key={index}
            className="w-96 h-96 bg-gray-700 bg-opacity-0 rounded-lg flex flex-col items-center justify-between gap-2 p-4"
          >
            <div className="flex  flex-col gap-2">
              <p className="text-lg font-bold">{item.title}</p>
              <p className="text-xs font-normal text-gray-400 text-justify">
                {item.description}
              </p>
            </div>
            <div className="w-full flex  flex-col gap-2">
              <p>{`Total Questions: ${item.questions.length}`}</p>
              <p>{`Total Time: ${item.examTime}`}</p>
            </div>
            <div className="w-full flex  flex-col gap-2">
              <button
                onClick={() => {
                  setIsButtonLoading(true);
                  setTimeout(() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    props.onClick && props.onClick(item as TTopicType);
                    setIsButtonLoading(false);
                  }, 2000);
                }}
                className="w-full bg-blue-500 p-4 rounded-xl cursor-pointer text-xs flex items-center justify-center"
              >
                {isButtonLoading ? <LoaderCircle className="animate-spin w-4 h-4" /> : "Take Quizz"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopicCard;
