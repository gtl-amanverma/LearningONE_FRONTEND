"use client";

import CustomSidebar from "@/components/sidebar/component";
import LoginLayout from "@/layouts/public/login/layout";
import React from "react";

const LoginPage = () => {
  return (
    <CustomSidebar>
      <div className="h-[calc(100vh-70px)] flex items-center justify-center">
        <LoginLayout />
      </div>
    </CustomSidebar>
  );
};

export default LoginPage;
