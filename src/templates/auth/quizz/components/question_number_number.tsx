"use client";

import React from "react";

type props = {
  totalNumber: number;
  activeNumber: number;
};

const QuestionListNumber = ({ ...props }: props) => {
  return (
    <div className="w-full flex items-center justify-start gap-4 flex-wrap shadow-2xl p-4 rounded-md bg-gray-700">
      {Array.from({ length: props.totalNumber }).map((_, index) => {
        const number = index + 1;
        const isActive = number <= props.activeNumber;
        return (
          <div key={index} className="relative">
            <div
              key={index}
              className={`w-10 h-10 border ${
                isActive ? "bg-green-600 border-green-300" : ""
              } flex items-center justify-center rounded-full cursor-pointer text-xs flex-shrink-0 z-50`}
            >
              {isActive ? "✔" : index + 1}
            </div>
            {number < props.totalNumber && (
              <div
                className={`border ${
                  isActive && number !== props.activeNumber
                    ? "bg-green-500 border-green-500"
                    : "border-white bg-white"
                } absolute w-4 h-1 left-10 top-[50%] z-10`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionListNumber;
