"use client";
import type {
  Element,
  IconType,
  Point,
  Tool,
  WhiteboardContextType,
} from "@/types/draw_board";
import { useCallback, useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use_toast";

const MAX_HISTORY_LENGTH = 30;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CANVAS_WIDTH = 1920;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CANVAS_HEIGHT = 1080;
const CANVAS_BACKGROUND_COLOR = "#F0F8FF";

const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

export const useWhiteboard = (
  canvasRefExt: React.RefObject<HTMLCanvasElement>
): Omit<
  WhiteboardContextType,
  | "canvasRef"
  | "handleMouseDown"
  | "handleMouseMove"
  | "handleMouseUp"
  | "handleMouseLeave"
> & { initializeCanvasEvents: (canvas: HTMLCanvasElement) => () => void } => {
  const { toast } = useToast();
  const [elements, setElements] = useState<Element[]>([]);
  const [history, setHistory] = useState<Element[][]>([[]]);
  const [historyStep, setHistoryStep] = useState(0);

  const [currentTool, setCurrentTool] = useState<Tool>("pen");
  const [currentColor, setCurrentColor] = useState<string>("#000000");
  const [currentBrushSize, setCurrentBrushSize] = useState<number>(5);
  const [selectedIcon, setSelectedIcon] = useState<IconType>("smiley");

  const isDrawingRef = useRef(false);
  const startPointRef = useRef<Point | null>(null);
  const currentElementRef = useRef<Element | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const getCanvasContext = useCallback(() => {
    if (!ctxRef.current && canvasRefExt.current) {
      ctxRef.current = canvasRefExt.current.getContext("2d");
    }
    return ctxRef.current;
  }, [canvasRefExt]);

  const saveToHistory = useCallback(
    (newElements: Element[]) => {
      const newHistory = history.slice(0, historyStep + 1);
      newHistory.push(newElements);
      if (newHistory.length > MAX_HISTORY_LENGTH) {
        newHistory.shift();
      }
      setHistory(newHistory);
      setHistoryStep(newHistory.length - 1);
    },
    [history, historyStep]
  );

  const drawElement = useCallback(
    (ctx: CanvasRenderingContext2D, element: Element) => {
      ctx.strokeStyle = element.color;
      ctx.fillStyle = element.color;
      ctx.lineWidth = element.brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      switch (element.type) {
        case "pen":
        case "eraser": // Eraser draws with background color
          ctx.beginPath();
          if (element.points.length > 0) {
            ctx.moveTo(element.points[0].x, element.points[0].y);
          }
          for (let i = 1; i < element.points.length; i++) {
            ctx.lineTo(element.points[i].x, element.points[i].y);
          }
          ctx.strokeStyle =
            element.type === "eraser" ? CANVAS_BACKGROUND_COLOR : element.color;
          ctx.stroke();
          break;
        case "rectangle":
          if (element.points.length === 2) {
            const [start, end] = element.points;
            ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
          }
          break;
        case "circle":
          if (element.points.length === 2) {
            const [center, edge] = element.points;
            const radius = Math.sqrt(
              Math.pow(edge.x - center.x, 2) + Math.pow(edge.y - center.y, 2)
            );
            ctx.beginPath();
            ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
            ctx.stroke();
          }
          break;
        case "line":
          if (element.points.length === 2) {
            ctx.beginPath();
            ctx.moveTo(element.points[0].x, element.points[0].y);
            ctx.lineTo(element.points[1].x, element.points[1].y);
            ctx.stroke();
          }
          break;
        case "triangle":
          if (element.points.length === 3) {
            // Assuming points[0]=start, points[1]=currentMouse, points[2]=calculated third point for equilateral or just 3 clicks
            // For simplicity: draw triangle from 3 points. Here, we use 2 points for base, 3rd is dynamic during draw
            // For a simple triangle defined by two points (base) and height determined by mouse:
            const [p1, p2] = element.points;
            if (!p1 || !p2) return;
            // This is a simplification, a real triangle tool might need 3 clicks or complex geometry.
            // For now, treat points[0] as top, points[1] as bottom-left, calculate bottom-right.
            // This logic is for drawing phase. Final element should have 3 points.
            if (element.points.length as number === 2) {
              // Drawing preview logic
              const thirdX = p1.x - (p2.x - p1.x);
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.lineTo(thirdX, p2.y);
              ctx.closePath();
              ctx.stroke();
            } else if (element.points.length === 3) {
              ctx.beginPath();
              ctx.moveTo(element.points[0].x, element.points[0].y);
              ctx.lineTo(element.points[1].x, element.points[1].y);
              ctx.lineTo(element.points[2].x, element.points[2].y);
              ctx.closePath();
              ctx.stroke();
            }
          }
          break;
        case "icon":
          if (element.points.length === 1 && element.iconType) {
            const charMap: Record<IconType, string> = {
              arrow: "→",
              smiley: "😊",
              tick: "✓",
              cross: "✗",
            };
            ctx.font = `${element.brushSize * 5}px sans-serif`; // Adjust size as needed
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(
              charMap[element.iconType],
              element.points[0].x,
              element.points[0].y
            );
          }
          break;
      }
    },
    []
  );

  const redrawCanvas = useCallback(
    (elementsToDraw: Element[], currentDrawingElement: Element | null) => {
      const ctx = getCanvasContext();
      if (!ctx || !canvasRefExt.current) return;

      ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
      ctx.fillRect(
        0,
        0,
        canvasRefExt.current.width,
        canvasRefExt.current.height
      );

      elementsToDraw.forEach((el) => drawElement(ctx, el));
      if (currentDrawingElement) {
        drawElement(ctx, currentDrawingElement);
      }
    },
    [getCanvasContext, drawElement, canvasRefExt]
  );

  useEffect(() => {
    redrawCanvas(elements, null);
  }, [elements, redrawCanvas]);

  const getMousePosition = (
    event: MouseEvent | React.MouseEvent<HTMLCanvasElement>
  ): Point => {
    const canvas = canvasRefExt.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    // Scale mouse coordinates to canvas resolution
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
  };

  const handleMouseDown = (
    event: MouseEvent | React.MouseEvent<HTMLCanvasElement>
  ) => {
    isDrawingRef.current = true;
    const pos = getMousePosition(event);
    startPointRef.current = pos;

    const newElement: Element = {
      id: generateId(),
      type: currentTool,
      points: [pos],
      color: currentTool === "eraser" ? CANVAS_BACKGROUND_COLOR : currentColor,
      brushSize: currentBrushSize,
      ...(currentTool === "icon" && { iconType: selectedIcon }),
    };

    if (currentTool === "icon") {
      setElements((prev) => [...prev, newElement]);
      saveToHistory([...elements, newElement]);
      isDrawingRef.current = false; // Icons are drawn on click, not drag
      currentElementRef.current = null;
    } else {
      currentElementRef.current = newElement;
    }
    redrawCanvas(elements, currentElementRef.current);
  };

  const handleMouseMove = (
    event: MouseEvent | React.MouseEvent<HTMLCanvasElement>
  ) => {
    if (
      !isDrawingRef.current ||
      !startPointRef.current ||
      !currentElementRef.current
    )
      return;
    const pos = getMousePosition(event);

    switch (currentTool) {
      case "pen":
      case "eraser":
        currentElementRef.current = {
          ...currentElementRef.current,
          points: [...currentElementRef.current.points, pos],
        };
        break;
      case "rectangle":
      case "circle":
      case "line":
        currentElementRef.current = {
          ...currentElementRef.current,
          points: [startPointRef.current, pos],
        };
        break;
      case "triangle": // Simplified: base is start to current, third point derived
        // For a 3-click triangle, this logic would be different.
        // This implementation is for a 2-point definition during drag (e.g. top point, then mouse defines base width/height)
        // The final element should store 3 points for triangle.
        // For now, just use 2 points for preview
        const p1 = startPointRef.current;
        const p2 = pos;
        const p3 = { x: p1.x - (p2.x - p1.x), y: p2.y }; // Example third point calculation
        currentElementRef.current = {
          ...currentElementRef.current,
          points: [p1, p2, p3],
        };
        break;
    }
    redrawCanvas(elements, currentElementRef.current);
  };

  const handleMouseUp = () => {
    if (!isDrawingRef.current || !currentElementRef.current) return;
    if (currentTool !== "icon") {
      // Icons are handled in mousedown
      const finalElement = currentElementRef.current;
      const newElements = [...elements, finalElement];
      setElements(newElements);
      saveToHistory(newElements);
    }
    isDrawingRef.current = false;
    startPointRef.current = null;
    currentElementRef.current = null;
    redrawCanvas(elements, null);
  };

  const handleMouseLeave = () => {
    if (isDrawingRef.current) {
      handleMouseUp(); // Treat as mouse up if mouse leaves canvas while drawing
    }
  };

  const initializeCanvasEvents = useCallback(
    (canvas: HTMLCanvasElement) => {
      const mDown = (e: MouseEvent) => handleMouseDown(e);
      const mMove = (e: MouseEvent) => handleMouseMove(e);
      const mUp = () => handleMouseUp();
      const mLeave = () => handleMouseLeave();

      canvas.addEventListener("mousedown", mDown);
      canvas.addEventListener("mousemove", mMove);
      canvas.addEventListener("mouseup", mUp);
      canvas.addEventListener("mouseleave", mLeave);

      return () => {
        canvas.removeEventListener("mousedown", mDown);
        canvas.removeEventListener("mousemove", mMove);
        canvas.removeEventListener("mouseup", mUp);
        canvas.removeEventListener("mouseleave", mLeave);
      };
    },
    [currentTool, currentColor, currentBrushSize, selectedIcon, elements]
  );

  const undo = () => {
    if (historyStep > 0) {
      const newStep = historyStep - 1;
      setHistoryStep(newStep);
      setElements(history[newStep] || []); // Ensure history[newStep] is not undefined
      redrawCanvas(history[newStep] || [], null);
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      const newStep = historyStep + 1;
      setHistoryStep(newStep);
      setElements(history[newStep] || []);
      redrawCanvas(history[newStep] || [], null);
    }
  };

  const clearCanvas = () => {
    setElements([]);
    saveToHistory([]);
    const ctx = getCanvasContext();
    if (ctx && canvasRefExt.current) {
      ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
      ctx.fillRect(
        0,
        0,
        canvasRefExt.current.width,
        canvasRefExt.current.height
      );
    }
    toast({
      title: "Canvas Cleared",
      description: "All drawings have been removed.",
    });
  };

  const downloadImage = (dataUrl: string, title: string) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${title.replace(/\s+/g, "_") || "drawing"}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const saveDrawing = (title: string, description: string) => {
    const canvas = canvasRefExt.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    downloadImage(dataUrl, title);
    // Here you could also save title and description, e.g., to localStorage or a backend
    toast({
      title: "Drawing Saved",
      description: `${
        title || "Untitled drawing"
      } has been prepared for download.`,
    });
  };

  const downloadDrawing = () => {
    const canvas = canvasRefExt.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    downloadImage(dataUrl, "CollaBoard_Drawing");
    toast({
      title: "Drawing Downloaded",
      description: "Your drawing has been downloaded.",
    });
  };

  return {
    elements,
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
    canUndo: historyStep > 0,
    canRedo: historyStep < history.length - 1,
    clearCanvas,
    saveDrawing,
    downloadDrawing,
    initializeCanvasEvents,
  };
};
