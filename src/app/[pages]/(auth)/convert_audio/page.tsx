import CustomSidebar from "@/components/sidebar/component";
import ConvertAudioLayout from "@/layouts/auth/convert_audio/layout";
import React from "react";

const ConvertAudioPage = () => {
  return (
    <CustomSidebar padding="p-0">
      <div className="h-[calc(100vh-70px)] flex items-center justify-center">
        <ConvertAudioLayout />
      </div>
    </CustomSidebar>
  );
};

export default ConvertAudioPage;
