import React, { useEffect, useRef, useState } from "react";
import ChatbotHeader from "./components/header";
import ChatbotBottom from "./components/bottom";
import ChatbotMessages from "./components/messages";
import { IconMessage } from "@tabler/icons-react";

const API_KEY = "AIzaSyBQRndMXeePQtOtCzsI-OuQc-yWP-CQiFk";

const ChatbotTemplate = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string }[]
  >([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages([...messages, { type: "user", text: userMsg }]);
    setInput("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            candidates: [
              {
                content: {
                  parts: [
                    {
                      text: "Hello! How can I help you today?",
                    },
                  ],
                },
              },
            ],
          }),
        }
      );
      const data = await res.json();
      setMessages((prev) => [...prev, { type: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Error: Failed to fetch response.", error: error },
      ]);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-full flex flex-col items-start relative">
      <div className="w-full">
        <ChatbotHeader />
      </div>
      {messages.length > 0 && (
        <div className="w-full border border-dashed border-gray-700 p-4 h-[calc(100vh-195px)] flex flex-col overflow-y-auto scrollbar-hide">
          {messages.map((message, index) => {
            const isLast = index === messages.length - 1;
            console.log("message", message);
            console.log(typeof isLast);
            return (
              <ChatbotMessages
                isSender={message.type === "user" ? true : false}
                key={index}
                message={message.text}
                isLast={isLast}
              />
            );
          })}
          <div ref={bottomRef} />
        </div>
      )}
      {messages.length <= 0 && (
        <div className="w-full border border-dashed border-gray-700 p-4 h-[calc(100vh-195px)] flex flex-col items-center justify-center overflow-y-auto scrollbar-hide">
          <IconMessage className="w-32 h-32 text-gray-700" />
          <p className="text-2xl font-bold text-gray-700">
            No Chats Available
          </p>
        </div>
      )}
      <div className="w-full absolute bottom-0 left-0">
        <ChatbotBottom
          onClick={sendMessage}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ChatbotTemplate;
