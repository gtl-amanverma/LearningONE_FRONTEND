import React, { useEffect } from "react";
import TopicCard from "./components/topic_card";
import QuestionDetails from "./components/questions_details";
import { TSelectedAnswerType, TTopicType } from "@/mocks/question";

type props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  data: TTopicType;
  setData: (data: TTopicType | null) => void;
  activeNumber: number;
  setActivateNumber: (value: number) => void;
  selectedAnswer: string;
  setSelectAnswer: (value: string | null) => void;
  answers: TSelectedAnswerType | null;
  setAnswers: (data: TSelectedAnswerType | null) => void;
  secondsLeft: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSecondsLeft: (value: any) => void;
  isTimeUp: boolean;
  setIsTimeUp: (value: boolean) => void;
};

const AuthQuizzTemplate = ({ ...props }: props) => {
  useEffect(() => {
    if (!props?.data?.examTime) return;

    const [minutesStr, secondsStr] = props.data.examTime.split(":");
    const minutes = parseInt(minutesStr, 10) || 0;
    const seconds = parseInt(secondsStr, 10) || 0;
    const totalSeconds = minutes * 60 + seconds;

    props.setSecondsLeft(totalSeconds);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.data?.examTime]);

  useEffect(() => {
    if (!props.isOpen || props.secondsLeft <= 0) return;

    const timer = setInterval(() => {
      props.setSecondsLeft((prev: number) => {
        if (prev <= 1) {
          clearInterval(timer);
          props.setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, [props.isOpen, props.setIsOpen, props.secondsLeft, props]);

  return (
    <div className="w-full">
      {props.isOpen || props.data ? (
        <QuestionDetails
          onClose={() => {
            props.setIsOpen(false);
            props.setData(null);
            props.setIsTimeUp(false);
          }}
          data={props.data as TTopicType}
          clearData={props.setData}
          activeNumber={props.activeNumber}
          setActivateNumber={props.setActivateNumber}
          selectedAnswer={props.selectedAnswer as string}
          setSelectAnswer={props.setSelectAnswer}
          answers={props.answers}
          setAnswers={props.setAnswers}
          secondsLeft={props.secondsLeft}
          isTimeUp={props.isTimeUp}
          setIsTimeUp={props.setIsTimeUp}
        />
      ) : (
        <div className="w-full flex flex-col items-center justify-start gap-4">
          <div className="w-full flex items-center justify-center gap-4 flex-wrap shadow-2xl p-4 rounded-md bg-gray-700">
            <h2 className="text-4xl">Select Topic</h2>
          </div>
          <div className="w-full">
            <TopicCard
              onClick={(data) => {
                props.setData(data);
                props.setIsOpen(true);
                props.setAnswers(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthQuizzTemplate;
