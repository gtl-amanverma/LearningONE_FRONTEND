import CustomSidebar from "@/components/sidebar/component";
import DrawLayout from "@/layouts/auth/draw/layout";
import React from "react";

const DrawPage = () => {
  return (
    <CustomSidebar>
      <div className="h-[calc(100vh-70px)] flex items-center justify-center">
        <DrawLayout />
      </div>
    </CustomSidebar>
  );
};

export default DrawPage;
