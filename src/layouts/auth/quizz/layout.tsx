import { TSelectedAnswerType, TTopicType } from "@/mocks/question";
import AuthQuizzTemplate from "@/templates/auth/quizz/template";
import React, { useState } from "react";

const QuizzLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<TTopicType | null>(null);
  const [activeNumber, setActivateNumber] = useState<number>(0);
  const [selectedAnswer, setSelectAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<TSelectedAnswerType | null>(null);
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  return (
    <div className="h-full w-full bg-gray-900 p-4">
      <AuthQuizzTemplate
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={data as TTopicType}
        setData={setData}
        activeNumber={activeNumber}
        setActivateNumber={setActivateNumber}
        selectedAnswer={selectedAnswer as string}
        setSelectAnswer={setSelectAnswer}
        answers={answers}
        setAnswers={setAnswers}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        isTimeUp={isTimeUp}
        setIsTimeUp={setIsTimeUp}
      />
    </div>
  );
};

export default QuizzLayout;
