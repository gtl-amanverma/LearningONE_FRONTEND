import CustomAnimateToolTip from "@/components/animate_tooltip/component";
import React from "react";

const BlankMessagePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <CustomAnimateToolTip />
      <div className="">
        <h1 className="text-4xl font-semibold">Start a new messages</h1>
      </div>
    </div>
  );
};

export default BlankMessagePage;
