'use client';
import { useWhiteboard } from "@/hooks/draw_board";
import React, { useEffect, useRef, useState } from "react";
import { Toolbar } from "./components/toolbar";
import { Canvas } from "./components/canvas";
import { SaveModal } from "./components/save_modal";

const DrawPageTemplate = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const whiteboardApi = useWhiteboard(canvasRef);
  const { initializeCanvasEvents, ...toolbarProps } = whiteboardApi;

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col h-full bg-gray-400 text-foreground font-body">
      {isMounted && (
        <>
          <Toolbar
            {...toolbarProps}
            onSaveClick={() => setIsSaveModalOpen(true)}
          />
          <div className="flex-grow relative w-full h-full overflow-hidden">
            <Canvas
              canvasRef={canvasRef}
              initializeCanvasEvents={initializeCanvasEvents}
            />
          </div>
          <SaveModal
            isOpen={isSaveModalOpen}
            onClose={() => setIsSaveModalOpen(false)}
            onSave={toolbarProps.saveDrawing}
          />
        </>
      )}
      {!isMounted && (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-headline">Loading CollaBoard...</p>
        </div>
      )}
    </div>
  );
};

export default DrawPageTemplate;
