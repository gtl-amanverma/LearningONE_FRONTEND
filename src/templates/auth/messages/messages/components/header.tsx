import React from "react";
import ImageIcon from "./user_icon";
import { TMessageUserType } from "@/types/message_user_type";
import { useAuth } from "@/context/auth_context";

type props = {
  chatDetails?: TMessageUserType;
};

const MessageHeader = ({ ...props }: props) => {
  const { loggedInUserDetails } = useAuth();
  const otherUser =
    props.chatDetails?.chatMembers.length === 1
      ? props.chatDetails?.chatMembers[0]
      : props.chatDetails?.chatMembers.find(
          (member) => String(member.id) !== String(loggedInUserDetails?.id)
        );
  return (
    <div className="bg-gray-800 w-full p-4 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <ImageIcon
          gender={otherUser?.userGender as string}
          chatType={props.chatDetails?.chatType}
        />
        <p className="font-bold text-xl flex items-center gap-2">
          <span>{props.chatDetails?.chatName ?? otherUser?.userName}</span>
          <span className="font-normal text-xs bg-gray-200 p-1 px-4 rounded-full text-green-500">
            Online
          </span>
        </p>
      </div>
    </div>
  );
};

export default MessageHeader;
