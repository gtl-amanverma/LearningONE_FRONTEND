"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/ui";
import {
  SmilePlus,
  ArrowRight,
  Check,
  X as LucideX,
  Smile as LucideSmile,
} from "lucide-react";
import type { IconType } from "@/types/draw_board";
import { Button } from "@/components/button/ui";
import { cn } from "@/utils/cn";
import { ToolButton } from "./tool_button";

interface IconPickerPopoverProps {
  selectedIcon: IconType;
  onIconSelect: (icon: IconType) => void;
  isIconToolActive: boolean;
  onIconToolToggle: () => void;
}

const ICONS_AVAILABLE: {
  type: IconType;
  icon: React.ElementType;
  label: string;
}[] = [
  { type: "arrow", icon: ArrowRight, label: "Arrow" },
  { type: "smiley", icon: LucideSmile, label: "Smiley" },
  { type: "tick", icon: Check, label: "Tick" },
  { type: "cross", icon: LucideX, label: "Cross" },
];

export const IconPickerPopover: React.FC<IconPickerPopoverProps> = ({
  selectedIcon,
  onIconSelect,
  isIconToolActive,
  onIconToolToggle,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ToolButton
          icon={SmilePlus}
          label="Insert Icon"
          onClick={onIconToolToggle}
          isActive={isIconToolActive}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 bg-gray-500">
        <div className="grid grid-cols-2 gap-2">
          {ICONS_AVAILABLE.map(({ type, icon: IconComponent, label }) => (
            <Button
              key={type}
              variant={
                selectedIcon === type && isIconToolActive
                  ? "secondary"
                  : "ghost"
              }
              size="sm"
              onClick={() => {
                onIconSelect(type);
                if (!isIconToolActive) onIconToolToggle(); // Activate icon tool if not already active
              }}
              className={cn(
                "flex flex-col items-center justify-center h-16 w-16 p-2 rounded-md",
                selectedIcon === type &&
                  isIconToolActive &&
                  "ring-2 ring-primary"
              )}
              aria-label={`Select ${label} icon`}
            >
              <IconComponent className="h-6 w-6 mb-1" />
              <span className="text-xs">{label}</span>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
