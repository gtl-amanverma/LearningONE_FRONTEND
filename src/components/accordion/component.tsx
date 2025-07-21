import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui";

type props = {
  title?: string;
  children?: React.ReactNode;
};

const CustomAccordion = ({ ...props }: props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-gray-800 p-1 rounded-2xl px-6"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{props.title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {props.children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
