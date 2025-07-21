import CustomMessageBubble from "@/components/message_bubble/component";
import React from "react";
import ImageIcon from "./user_icon";

type props = {
  message?: string;
  isSender?: boolean;
  index?: number;
  isLast?: boolean;
};

const ChatbotMessages = ({ ...props }: props) => {
  return (
    <div key={props.index} className="w-full">
      <div
        className={`w-full flex items-center ${
          props.isSender ? "items-end justify-end" : "items-end justify-start"
        } flex gap-4 ${props.isLast ? "animate-slide-up" : ""}`}
      >
        {!props.isSender && <ImageIcon />}
        <CustomMessageBubble
          content={props.message}
          isSender={props.isSender}
          time={new Date()}
        />
        {props.isSender && <ImageIcon />}
      </div>
    </div>
  );
};

export default ChatbotMessages;
