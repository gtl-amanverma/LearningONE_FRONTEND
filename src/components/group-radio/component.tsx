import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui";
import { Label } from "../label/ui";
import { TAnswerType } from "@/mocks/question";

type props = {
  items: Array<TAnswerType>;
  onChange?: (event: string) => void;
  value?: string;
};

const CustomRadioGroup = ({ ...props }: props) => {
  return (
    <RadioGroup
      onValueChange={(event) => props.onChange && props.onChange(event)}
      value={props.value || ""}
      className="flex flex-col gap-4"
    >
      {props.items.map((item, index) => {
        return (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={item.id} id={index.toString()} />
            <Label htmlFor="r1">{item.answer}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
