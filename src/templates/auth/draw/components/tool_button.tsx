"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip/ui";
import { Button, ButtonProps } from "@/components/button/ui";
import { cn } from "@/utils/cn";

interface ToolButtonProps extends ButtonProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

export const ToolButton: React.FC<ToolButtonProps> = ({
  icon: Icon,
  label,
  isActive,
  className,
  ...props
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant={isActive ? "secondary" : "ghost"}
            size="icon"
            className={cn(
              "h-10 w-10 p-2 rounded-md",
              isActive && "ring-2 ring-primary",
              className
            )}
            aria-label={label}
            {...props}
          >
            <Icon className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
