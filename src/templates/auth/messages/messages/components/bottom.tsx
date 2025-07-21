import React from "react";

type props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onClick: () => void;
};

const MessageBottom = ({ ...props }: props) => {
  return (
    <div className="p-4 bg-gray-800 flex items-center justify-between gap-2">
      <div className="w-full">
        <input
          className="bg-gray-700 border-none focus:border-none active:border-none outline-none w-full placeholder:text-gray-500 text-gray-200 text-xs p-2 rounded-full px-4"
          placeholder="write a message here..."
          value={props.value}
          onChange={props.onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              props.onClick?.();
            }
          }}
        />
      </div>
      <div>
        <button
          onClick={props.onClick}
          className="p-2 bg-gray-700 rounded-full text-xs px-8 font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageBottom;
