import CustomSidebar from "@/components/sidebar/component";
import BoardLayout from "@/layouts/auth/board/layout";
import React from "react";

const BoardPage = () => {
  return (
    <CustomSidebar padding="p-0">
      <div className="h-[calc(100vh-70px)] flex items-center justify-center">
        <BoardLayout />
      </div>
    </CustomSidebar>
  );
};

export default BoardPage;
