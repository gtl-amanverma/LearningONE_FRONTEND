import {
  IconManFilled,
  IconUsersGroup,
  IconWomanFilled,
} from "@tabler/icons-react";
import React from "react";

type props = {
  gender: string;
  chatType?: string;
};

const ImageIcon = ({ ...props }: props) => {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center overflow-hidden">
      {props.chatType === "private" ? (
        <>
          {props.gender === "female" ? (
            <IconWomanFilled className="w-5 h-5" />
          ) : (
            <IconManFilled className="w-5 h-5" />
          )}
        </>
      ) : (
        <IconUsersGroup className="w-5 h-5" />
      )}
    </div>
  );
};

export default ImageIcon;
