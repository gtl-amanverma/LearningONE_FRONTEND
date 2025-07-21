"use client";

import CustomSidebar from "@/components/sidebar/component";
import ChatbotLayout from "@/layouts/auth/chatbot/layout";
import React from "react";

const ChatbotPage = () => {
  return (
    <CustomSidebar padding="p-0">
      <div className="h-[calc(100vh-70px)] flex items-center justify-center">
        <ChatbotLayout />
      </div>
    </CustomSidebar>
  );
};

export default ChatbotPage;
