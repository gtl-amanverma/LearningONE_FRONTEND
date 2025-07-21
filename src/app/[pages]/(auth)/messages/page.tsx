"use client";

import CustomSidebar from "@/components/sidebar/component";
import MessageLayout from "@/layouts/auth/message/layout";
import React from "react";

const MessagePage = () => {
  return (
    <CustomSidebar padding="p-0">
      <div className="h-[calc(100vh-70px)] flex items-center justify-center">
        <MessageLayout />
      </div>
    </CustomSidebar>
  );
};

export default MessagePage;
