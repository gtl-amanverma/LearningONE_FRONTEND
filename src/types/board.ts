export interface User {
  userId: string;
  username: string;
  email: string;
  avatar?: string; // Optional: URL to avatar image or use initials
}

export type TaskStatus = "todo" | "inprogress" | "done";

export const TASK_STATUSES: TaskStatus[] = ["todo", "inprogress", "done"];

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

export interface Task {
  taskId: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignedTo?: string; // userId
  sprintName?: string; // Optional: Name of the sprint
}

export interface Project {
  projectId: string;
  projectName: string;
  projectDescription: string;
  users: string[]; // userIds assigned to this project
  tasks: Task[];
  definedSprints?: string[]; // Explicitly defined sprint names for the project
}

// For AI suggestions
export interface SimilarTaskSuggestion {
  originalText: string; // The suggested similar task text from AI
  // You might want to add taskId or other identifiers if you can map them back
}
