"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/ui";
import { Baseline } from "lucide-react"; // Using Baseline as a generic size icon
import { Button } from "@/components/button/ui";
import { Slider } from "@/components/slider/ui";

interface SizeSliderPopoverProps {
  currentSize: number;
  onSizeChange: (size: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const SizeSliderPopover: React.FC<SizeSliderPopoverProps> = ({
  currentSize,
  onSizeChange,
  min = 1,
  max = 50,
  step = 1,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Select brush size"
          className="h-10 w-10 p-2 rounded-md"
        >
          <Baseline className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-4 bg-gray-500">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span>Size:</span>
            <span>{currentSize}px</span>
          </div>
          <Slider
            value={[currentSize]}
            onValueChange={(value) => onSizeChange(value[0])}
            min={min}
            max={max}
            step={step}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
