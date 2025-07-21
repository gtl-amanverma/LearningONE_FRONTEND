"use client";

import React from "react";
import {
  PenTool,
  Eraser,
  Square,
  Circle as CircleIcon,
  Minus, // Minus for Line
  Triangle as TriangleIcon,
  Trash2,
  Undo2,
  Redo2,
  Save,
  Download,
} from "lucide-react";
import type { WhiteboardContextType } from "@/types/draw_board";
import { Separator } from "@/components/separator/ui";
import { IconPickerPopover } from "./icon_picker";
import { ColorPickerPopover } from "./color_picker";
import { SizeSliderPopover } from "./size_slider_popover";
import { ToolButton } from "./tool_button";

type ToolbarProps = Pick<
  WhiteboardContextType,
  | "currentTool"
  | "setCurrentTool"
  | "currentColor"
  | "setCurrentColor"
  | "currentBrushSize"
  | "setCurrentBrushSize"
  | "selectedIcon"
  | "setSelectedIcon"
  | "undo"
  | "redo"
  | "canUndo"
  | "canRedo"
  | "clearCanvas"
  | "downloadDrawing"
> & {
  onSaveClick: () => void;
};

export const Toolbar: React.FC<ToolbarProps> = ({
  currentTool,
  setCurrentTool,
  currentColor,
  setCurrentColor,
  currentBrushSize,
  setCurrentBrushSize,
  selectedIcon,
  setSelectedIcon,
  undo,
  redo,
  canUndo,
  canRedo,
  clearCanvas,
  downloadDrawing,
  onSaveClick,
}) => {
  return (
    <header className="bg-card border-b shadow-sm p-2 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-1 flex-wrap">
        <div className="flex items-center gap-1">
          <ToolButton
            icon={PenTool}
            label="Pen"
            isActive={currentTool === "pen"}
            onClick={() => setCurrentTool("pen")}
          />
          <ToolButton
            icon={Eraser}
            label="Eraser"
            isActive={currentTool === "eraser"}
            onClick={() => setCurrentTool("eraser")}
          />
          <Separator orientation="vertical" className="h-8 mx-1" />
          <ToolButton
            icon={Square}
            label="Rectangle"
            isActive={currentTool === "rectangle"}
            onClick={() => setCurrentTool("rectangle")}
          />
          <ToolButton
            icon={CircleIcon}
            label="Circle"
            isActive={currentTool === "circle"}
            onClick={() => setCurrentTool("circle")}
          />
          <ToolButton
            icon={TriangleIcon}
            label="Triangle"
            isActive={currentTool === "triangle"}
            onClick={() => setCurrentTool("triangle")}
          />
          <ToolButton
            icon={Minus}
            label="Line"
            isActive={currentTool === "line"}
            onClick={() => setCurrentTool("line")}
          />
          <IconPickerPopover
            selectedIcon={selectedIcon}
            onIconSelect={setSelectedIcon}
            isIconToolActive={currentTool === "icon"}
            onIconToolToggle={() =>
              setCurrentTool(currentTool === "icon" ? "pen" : "icon")
            }
          />
        </div>

        <div className="flex items-center gap-1">
          <ColorPickerPopover
            currentColor={currentColor}
            onColorChange={setCurrentColor}
          />
          <SizeSliderPopover
            currentSize={currentBrushSize}
            onSizeChange={setCurrentBrushSize}
          />
        </div>

        <Separator
          orientation="vertical"
          className="h-8 mx-1 hidden sm:block"
        />

        <div className="flex items-center gap-1">
          <ToolButton
            icon={Undo2}
            label="Undo"
            onClick={undo}
            disabled={!canUndo}
          />
          <ToolButton
            icon={Redo2}
            label="Redo"
            onClick={redo}
            disabled={!canRedo}
          />
          <ToolButton icon={Trash2} label="Clear All" onClick={clearCanvas} />
        </div>

        <Separator
          orientation="vertical"
          className="h-8 mx-1 hidden sm:block"
        />

        <div className="flex items-center gap-1">
          <ToolButton icon={Save} label="Save Drawing" onClick={onSaveClick} />
          <ToolButton
            icon={Download}
            label="Download PNG"
            onClick={downloadDrawing}
          />
        </div>
      </div>
    </header>
  );
};
