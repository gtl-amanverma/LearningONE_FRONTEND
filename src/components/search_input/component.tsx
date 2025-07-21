import { IconSearch } from "@tabler/icons-react";
import { X } from "lucide-react";
import React from "react";

type props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  onClear?: () => void;
};

const CustomSearchInput = ({ ...props }: props) => {
  return (
    <div className="bg-gray-600 p-2 rounded-lg flex items-center justify-start gap-1 min-w-96">
      <IconSearch className="w-5 h-5" />
      <input
        placeholder={props.placeholder}
        value={props.value ?? ""}
        onChange={props.onChange}
        className="outline-none w-full ml-2 placeholder:text-xs text-xs"
      />
      <div>
        {props.value && (
          <X onClick={props.onClear} className="w-5 h-5 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default CustomSearchInput;
