import React from "react";
import "./style.css";
import moment from "moment";

type props = {
  content?: React.ReactNode;
  isSender?: boolean;
  time?: Date | null;
};

const CustomMessageBubble = ({ ...props }: props) => {
  return (
    <div
      className={`${
        props.isSender ? "tooltip-right text-right" : "tooltip-left text-left"
      } text-xs text-gray-800 md:max-w-[50%] mb-6 flex flex-col items-start justify-start gap-1`}
    >
      <p
        className={`text-justify w-full flex items-center ${
          props.isSender ? "justify-end" : "justify-start"
        }`}
      >
        {props.content}
      </p>
      {props.time && (
        <p
          className={`w-full flex items-center ${
            props.isSender ? "justify-start" : "justify-end"
          } font-semibold text-gray-500`}
        >
          {moment(props.time).fromNow()}
        </p>
      )}
    </div>
  );
};

export default CustomMessageBubble;
