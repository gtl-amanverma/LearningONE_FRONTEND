export type Tool = 'pen' | 'eraser' | 'rectangle' | 'circle' | 'triangle' | 'line' | 'icon';
export type IconType = 'arrow' | 'smiley' | 'tick' | 'cross';

export interface Point {
  x: number;
  y: number;
}

export interface Element {
  id: string;
  type: Tool;
  points: Point[];
  color: string;
  brushSize: number;
  iconType?: IconType;
  // For shapes, points[0] is start, points[1] is end or dimensions helper
}

// Props for components that need access to whiteboard state and actions
export interface WhiteboardContextType {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  elements: Element[];
  currentTool: Tool;
  setCurrentTool: (tool: Tool) => void;
  currentColor: string;
  setCurrentColor: (color: string) => void;
  currentBrushSize: number;
  setCurrentBrushSize: (size: number) => void;
  selectedIcon: IconType;
  setSelectedIcon: (icon: IconType) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  clearCanvas: () => void;
  saveDrawing: (title: string, description: string) => void;
  downloadDrawing: () => void;
  handleMouseDown: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  handleMouseMove: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  handleMouseUp: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  handleMouseLeave: (event: React.MouseEvent<HTMLCanvasElement>) => void;
}
