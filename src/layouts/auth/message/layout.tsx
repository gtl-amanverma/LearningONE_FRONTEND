import BlankMessagePage from "@/templates/auth/messages/blank_message_page/template";
import MessageTemplate from "@/templates/auth/messages/messages/template";
import MessageUsersList from "@/templates/auth/messages/users_lists/template";
import { TMessageUserType } from "@/types/message_user_type";
import React, { useState } from "react";

const MessageLayout = () => {
  const [open, setOpen] = useState<TMessageUserType | null>(null);

  return (
    <div className="h-full w-full md:w-[70rem] bg-gray-900 flex items-center justify-center gap-4">
      <MessageUsersList onClick={(data) => setOpen(data)} setOpen={setOpen} />
      {open ? <MessageTemplate chatDetails={open} /> : <BlankMessagePage />}
    </div>
  );
};

export default MessageLayout;
