import React, { useCallback, useEffect, useRef, useState } from "react";
import MessageHeader from "./components/header";
import MessageBody from "./components/message";
import MessageBottom from "./components/bottom";
import { TMessageUserType } from "@/types/message_user_type";
import { User } from "@/types/loggedin_user.type";
import { IconLoader } from "@tabler/icons-react";
import { useAuth } from "@/context/auth_context";
import { getSocket } from "@/utils/socket";

export interface TMessageType {
  messageId: string;
  chatId: string;
  contentType: string;
  content: string;
  contentDateTime: Date | string;
  isEdited: boolean;
  isDeleted: boolean;
  contentSendFrom: User;
  isRead: Array<string>;
}

type props = {
  chatDetails?: TMessageUserType;
};

const MessageTemplate = ({ ...props }: props) => {
  const socket = getSocket();
  const { loggedInUserDetails, token } = useAuth();
  const [messages, setMessages] = useState<Array<TMessageType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>("");
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  const scrollToBottom = (smooth = true) => {
    messageEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
    });
  };

  useEffect(() => {
    if (!isLoading) {
      scrollToBottom(false); // auto-scroll without animation on initial fetch
    }
  }, [isLoading]);

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom(); // scroll smoothly on every new message
    }
  }, [messages]);

  useEffect(() => {
    const container = messageContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const atBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 50;
      setShowScrollToBottom(!atBottom);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!props.chatDetails?.chatId) return;

    const roomId = props.chatDetails.chatId;

    if (socket && socket.connected) {
      socket.emit("joinRoom", roomId);
    } else {
      socket.on("connect", () => {
        socket.emit("joinRoom", roomId);
      });
    }

    const handleReceiveMessage = (message: TMessageType) => {
      if (message.chatId === roomId) {
        setMessages((prev) => [...prev, message]);
      }
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [props.chatDetails?.chatId, socket]);

  const fetchMessages = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:6001/api/v1/private/auth/user/fetch/receive-message?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            chatId: props.chatDetails?.chatId,
          }),
        }
      );
      const result = await response.json();
      if ("Success" in result && result.Success) {
        setMessages(result.Data);
      } else {
        setMessages([]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new Error(error as any);
    }
  }, [props.chatDetails?.chatId, token]);

  const handleSendMessage = useCallback(async () => {
    try {
      const roomId = props.chatDetails?.chatId;
      const messagePayload = {
        messageId: `${Date.now()}`, // temporary ID (replace with real if needed)
        chatId: roomId!,
        content: inputMessage,
        contentType: "message",
        contentDateTime: new Date().toISOString(),
        isEdited: false,
        isDeleted: false,
        contentSendFrom: loggedInUserDetails!,
        isRead: [],
      };
      const response = await fetch(
        `http://localhost:6001/api/v1/private/auth/user/fetch/send-message?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            chatId: roomId,
            content: inputMessage,
            contentType: "message",
          }),
        }
      );
      const result = await response.json();
      if ("Success" in result && result.Success) {
        socket.emit("sendMessage", {
          roomId,
          message: messagePayload,
        });
        setMessages((prev) => [...prev, result.Data]);
        setInputMessage("");
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new Error(error as any);
    }
  }, [
    inputMessage,
    loggedInUserDetails,
    props.chatDetails?.chatId,
    socket,
    token,
  ]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <div className="w-full h-full flex flex-col items-start relative">
      <div className="w-full">
        <MessageHeader chatDetails={props.chatDetails} />
      </div>
      <div
        ref={messageContainerRef}
        className="w-full relative border border-dashed border-gray-700 p-4 h-[calc(100vh-195px)] flex flex-col items-start justify-start gap-2 overflow-y-auto scrollbar-hide"
      >
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <IconLoader className="animate-spin" />
          </div>
        ) : (
          <>
            {messages.length > 0 ? (
              messages.map((message, index) => {
                return (
                  <div key={index} className="w-full">
                    <MessageBody
                      isSender={
                        String(message.contentSendFrom.id) ===
                        String(loggedInUserDetails?.id)
                          ? true
                          : false
                      }
                      content={message.content}
                      time={message.contentDateTime as Date}
                    />
                  </div>
                );
              })
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                No Messages
              </div>
            )}
          </>
        )}
        <div ref={messageEndRef} />
        {showScrollToBottom && (
          <button
            className="absolute right-4 bottom-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce z-50 flex items-center justify-center cursor-pointer"
            onClick={() => scrollToBottom(true)}
          >
            ↓
          </button>
        )}
      </div>
      <div className="w-full absolute bottom-0 left-0">
        <MessageBottom
          onChange={(event) => setInputMessage(event.target.value)}
          value={inputMessage}
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default MessageTemplate;
