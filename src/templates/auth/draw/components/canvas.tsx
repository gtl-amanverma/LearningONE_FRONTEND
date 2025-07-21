"use client";

import React, { useEffect } from "react";

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  initializeCanvasEvents: (canvas: HTMLCanvasElement) => () => void;
}

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const CANVAS_BACKGROUND_COLOR = "#F0F8FF"; // AliceBlue, should match hook

export const Canvas: React.FC<CanvasProps> = ({
  canvasRef,
  initializeCanvasEvents,
}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial background
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const cleanup = initializeCanvasEvents(canvas);
    return cleanup;
  }, [canvasRef, initializeCanvasEvents]);

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="bg-white shadow-lg rounded-md touch-none max-w-full max-h-full object-contain"
        // style={{ backgroundColor: CANVAS_BACKGROUND_COLOR }} // CSS background can also be set
      />
    </div>
  );
};
