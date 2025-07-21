import CustomMessageBubble from "@/components/message_bubble/component";
import React from "react";
import ImageIcon from "./user_icon";

type props = {
  isSender: boolean;
  content: string;
  time: Date;
};

const MessageBody = ({ ...props }: props) => {
  return (
    <div className={`flex items-end justify-end gap-3`}>
      {!props.isSender && (
        <div className="h-full">
          <ImageIcon gender="male" chatType="private" />
        </div>
      )}

      {props.content && (
        <div
          className={`w-full flex items-center justify-${
            props.isSender ? "end" : "start"
          }`}
        >
          <CustomMessageBubble
            isSender={props.isSender}
            content={props.content}
            time={props.time}
          />
        </div>
      )}

      {props.isSender && (
        <div className="h-full">
          <ImageIcon gender="female" chatType="private" />
        </div>
      )}
    </div>
  );
};

export default MessageBody;
