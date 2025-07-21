"use client";
import React, { useCallback } from "react";
import ImageIcon from "../../messages/components/user_icon";
import { IconBell } from "@tabler/icons-react";
import { TMessageUserType } from "@/types/message_user_type";
import moment from "moment";
import { useAuth } from "@/context/auth_context";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/context-menu/ui";

type props = {
  item: TMessageUserType;
  latestMessageTime?: Date;
  onClick?: (data: TMessageUserType) => void;
  onClickEdit?: (value: string) => void;
  onClickLeave?: (value: string) => void;
  isRefresh: boolean;
  setIsRefresh: (value: boolean) => void;
};

const MessageUserDetails = ({ ...props }: props) => {
  const { loggedInUserDetails, token } = useAuth();
  const otherUser =
    props.item?.chatMembers.length === 1
      ? props.item?.chatMembers[0]
      : props.item?.chatMembers.find(
          (member) => String(member.id) !== String(loggedInUserDetails?.id)
        );

  // delete chat
  const handleDelete = useCallback(
    async (id: string) => {
      try {
        const response = await fetch(
          `http://localhost:6001/api/v1/private/auth/user/fetch/delete-chat?token=${token}`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              chatId: id,
            }),
          }
        );

        const result = await response.json();
        console.log("result", result);
        if ("Success" in result && result.Success) {
          props.setIsRefresh(!props.isRefresh);
        } else {
          return;
        }
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        throw new Error(error as any);
      }
    },
    [props, token]
  );

  // leave chat
  const handleLeave = useCallback(
    async (loggedInUserId: string, chatId: string) => {
      try {
        const response = await fetch(
          `http://localhost:6001/api/v1/private/auth/user/fetch/leave-chat?token=${token}`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              userId: loggedInUserId,
              chatId: chatId,
            }),
          }
        );
        const result = await response.json();
        if ("Success" in result && result.Success) {
          props.setIsRefresh(!props.isRefresh);
        } else {
          return;
        }
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        throw new Error(error as any);
      }
    },
    [props, token]
  );

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center justify-center rounded-md text-sm">
        <div
          onClick={() =>
            props.onClick && props.onClick(props.item as TMessageUserType)
          }
          className="w-full h-20 p-2 bg-gray-700 rounded-md flex items-center justify-between cursor-pointer"
        >
          <div className="w-full flex items-center justify-start gap-2">
            <ImageIcon
              gender={otherUser?.userGender as string}
              chatType={props.item?.chatType}
            />
            <p className="flex flex-col">
              <span className="font-semibold text-md text-gray-400">
                {props.item?.chatName ?? otherUser?.userName}
              </span>
              {props.item?.lastestMessage && (
                <span className="font-light text-xs text-gray-400">
                  {`Lastest message: ${props.item?.lastestMessage}`}
                </span>
              )}
            </p>
          </div>
          <div className="h-full w-32 flex flex-col items-end justify-between p-2 gap-4">
            {props.item?.lastestMessage ? (
              <IconBell className="text-blue-500 flex-shrink-0 w-5 h-5" />
            ) : (
              <div />
            )}
            {props.latestMessageTime && (
              <p className="text-[9px] text-gray-500">
                {moment(props.latestMessageTime).fromNow()}
              </p>
            )}
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52 bg-gray-700 border border-gray-500 shadow-2xl">
        <ContextMenuItem
          onClick={() =>
            props.onClickEdit && props.onClickEdit(props.item.chatId)
          }
          inset
          className="cursor-pointer text-blue-500 hover:bg-gray-600"
        >
          Edit
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() =>
            handleLeave(String(loggedInUserDetails?.id), props.item.chatId)
          }
          inset
          className="text-orange-500 cursor-pointer hover:bg-gray-600"
        >
          Leave group
          <ContextMenuShortcut>⌘L</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => handleDelete(props.item.chatId)}
          inset
          className="text-red-500 cursor-pointer hover:bg-gray-600"
        >
          Delete group
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default MessageUserDetails;
