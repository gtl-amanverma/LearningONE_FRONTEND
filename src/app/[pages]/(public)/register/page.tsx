"use client";

import CustomSidebar from "@/components/sidebar/component";
import RegisterLayout from "@/layouts/public/register/layout";
import React from "react";

const RegisterPage = () => {
  return (
    <CustomSidebar>
      <div className="h-[calc(100vh-70px)] flex items-center justify-center">
        <RegisterLayout />
      </div>
    </CustomSidebar>
  );
};

export default RegisterPage;
