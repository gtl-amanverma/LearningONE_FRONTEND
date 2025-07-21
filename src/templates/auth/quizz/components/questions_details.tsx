import { TSelectedAnswerType, TTopicType } from "@/mocks/question";
import React, { useCallback, useEffect } from "react";
import QuestionListNumber from "./question_number_number";
import CustomRadioGroup from "@/components/group-radio/component";
import { TriangleAlert } from "lucide-react";

type props = {
  onClose: (value: boolean) => void;
  clearData: (data: null) => void;
  data: TTopicType;
  activeNumber: number;
  setActivateNumber: (value: number) => void;
  selectedAnswer: string;
  setSelectAnswer: (value: string | null) => void;
  answers: TSelectedAnswerType | null;
  setAnswers: (answers: TSelectedAnswerType | null) => void;
  secondsLeft: number;
  isTimeUp: boolean;
  setIsTimeUp?: (value: boolean) => void;
};

const QuestionDetails = ({ ...props }: props) => {
  const disabled = props.selectedAnswer ? false : true;

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleChangeAnswer = useCallback(() => {
    if (props.activeNumber < props.data.questions.length - 1) {
      props.setActivateNumber(props.activeNumber + 1);
      props.setSelectAnswer(null);
    } else if (props.activeNumber === props.data.questions.length - 1) {
      console.log("This is last index");
    }
  }, [props]);

  useEffect(() => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {
        // Optional: handle errors silently or log them
      });
    }

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-4">
      <div className="w-full flex items-center justify-between flex-wrap gap-4">
        <button
          onClick={() => props.onClose && props.onClose(false)}
          className="bg-red-500 p-2 w-32 text-sm rounded-xl cursor-pointer"
        >
          Leave Quizz
        </button>
        <div>
          <p className="text-lg font-semibold text-gray-500">
            {props.data.title}
          </p>
          <p className="text-sm text-center font-normal text-blue-500">{`Time Remaining: ${formatTime(
            props.secondsLeft
          )}`}</p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2">
          {props.activeNumber > 0 && (
            <button
              onClick={() => {
                if (props.activeNumber > 0) {
                  props.setActivateNumber(props.activeNumber - 1);
                  props.setSelectAnswer(null);
                }
              }}
              className="bg-orange-500 p-2 rounded-xl cursor-pointer w-32 flex items-center justify-center"
            >
              ← Back
            </button>
          )}
          <button
            disabled={disabled}
            onClick={handleChangeAnswer}
            className={`${
              disabled
                ? "bg-gray-500 text-gray-400"
                : "bg-blue-500 text-gray-200 cursor-pointer"
            } p-2 rounded-xl w-32 flex items-center justify-center`}
          >
            {props.activeNumber === props.data.questions.length - 1
              ? "Submit Quizz"
              : "Next →"}
          </button>
        </div>
      </div>

      <div className="w-full">
        <QuestionListNumber
          totalNumber={props.data.questions.length}
          activeNumber={props.activeNumber}
        />
      </div>
      <div className="w-full">
        <p className="text-xl font-bold text-gray-400">
          {`${props.activeNumber + 1}. ${
            props.data.questions[props.activeNumber].question
          }`}
        </p>
        <p className="text-xs text-gray-500 ml-6 text-justify">{`Description: ${
          props.data.questions[props.activeNumber].description
        }`}</p>
        <p className="text-sm font-semibold text-gray-500 ml-6 text-justify mt-5">
          Options:
        </p>
        <div className="text-sm font-semibold text-gray-500 ml-6 text-justify mt-5">
          <CustomRadioGroup
            items={props.data.questions[props.activeNumber].options}
            onChange={(event) => props.setSelectAnswer(event as string)}
            value={props.selectedAnswer as string}
          />
        </div>
      </div>

      {props.isTimeUp && (
        <div className="w-screen h-screen absolute left-0 top-0 z-50 bg-transparent flex items-center justify-center">
          <div className="w-[50rem] bg-white z-50 shadow-2xl shadow-white rounded-2xl flex flex-col items-center justify-between">
            <div className="w-full p-2 flex items-center justify-center">
              <TriangleAlert className="text-red-500 w-12 h-12" />
            </div>
            <div className="w-full p-2 flex items-center justify-center">
              <p className="text-gray-700">
                Your exam&apos;s time requesting timeout please click on this okay
                button and go to the main section.
              </p>
            </div>
            <div className="w-full p-2 flex items-center justify-center">
              <button
                onClick={() => props.onClose && props.onClose(false)}
                className="bg-orange-500 p-2 rounded-xl cursor-pointer w-32 flex items-center justify-center"
              >
                Submit →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionDetails;
