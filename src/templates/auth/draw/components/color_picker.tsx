"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/ui";
import { Palette } from "lucide-react";
import { Button } from "@/components/button/ui";
import { Input } from "@/components/input/ui";
import { cn } from "@/utils/cn";

interface ColorPickerPopoverProps {
  currentColor: string;
  onColorChange: (color: string) => void;
}

const PRESET_COLORS = [
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#808080",
  "#FFA500",
  "#800080",
  "#A52A2A",
  "#4CAF50",
  "#2196F3",
  "#FFEB3B",
];

export const ColorPickerPopover: React.FC<ColorPickerPopoverProps> = ({
  currentColor,
  onColorChange,
}) => {
  const [customColor, setCustomColor] = useState(currentColor);

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    // Basic validation for hex color
    if (
      /^#[0-9A-F]{6}$/i.test(e.target.value) ||
      /^[0-9A-F]{3}$/i.test(e.target.value)
    ) {
      onColorChange(e.target.value);
    }
  };

  const handlePresetClick = (color: string) => {
    onColorChange(color);
    setCustomColor(color);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Select color"
          className="h-10 w-10 p-0 rounded-md"
        >
          <div className="flex items-center justify-center h-full w-full">
            <Palette className="h-5 w-5 mr-1" />
            <div
              className="h-4 w-4 rounded-full border border-foreground"
              style={{ backgroundColor: currentColor }}
            />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 bg-gray-500">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {PRESET_COLORS.map((color) => (
            <button
              key={color}
              title={color}
              className={cn(
                "h-6 w-6 rounded-full border cursor-pointer transition-transform hover:scale-110",
                currentColor === color && "ring-2 ring-offset-2 ring-primary"
              )}
              style={{ backgroundColor: color }}
              onClick={() => handlePresetClick(color)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={customColor}
            onChange={handleCustomColorChange}
            placeholder="#RRGGBB"
            className="w-28 h-8"
          />
          <Input
            type="color"
            value={currentColor} // Ensure this is bound to the actively selected color
            onChange={(e) => handlePresetClick(e.target.value)}
            className="h-8 w-8 p-0 border-none cursor-pointer appearance-none bg-transparent"
            style={{ backgroundColor: "transparent" }} // Override Tailwind styles if necessary
            title="Pick custom color"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
