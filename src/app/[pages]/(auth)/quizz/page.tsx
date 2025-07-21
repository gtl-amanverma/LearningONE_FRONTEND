"use client";

import CustomSidebar from "@/components/sidebar/component";
import QuizzLayout from "@/layouts/auth/quizz/layout";
import React from "react";

const QuizzPage = () => {
  return (
    <CustomSidebar padding="p-0">
      <div className="w-full h-[calc(100vh-70px)] flex items-center justify-center">
        <QuizzLayout />
      </div>
    </CustomSidebar>
  );
};

export default QuizzPage;
