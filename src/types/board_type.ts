import { User } from "./loggedin_user.type";

export interface TBoardProjectType {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectMembers: Array<User>;
  projectCreatedDate: Date;
  projectUpdatedDate: Date;
  projectState: string;
}





//============================================

export interface TTaskStoryPointType {
  userId: string;
  storyPoint: string;
}

export interface TTaskCommentType {
  userId: string;
  comment: string;
}

export interface TTaskType {
  taskId: string;
  taskName: string | null;
  taskDescription: string | null;
  taskType: string | null;
  taskAssignedTo: User | null;
  taskReportedTo: User | null;
  taskOriginalEstimatedTime: string | number | null;
  taskCompletedTime: string | number | null;
  taskRemainingTime: string | number | null;
  taskStoryPoints: Array<TTaskStoryPointType> | null;
  taskComments: Array<TTaskCommentType> | null;
  taskStatus: string | null;
  taskCreatedDate: Date;
}

export interface TBoardType {
  boardName: string | null;
  isDisabled: boolean;
  boardTasks: Array<TTaskType> | null;
}

export interface TSprintType {
  sprintName: string;
  sprintStartDate: Date;
  sprintEndDate: Date;
  isActiveSprint: boolean;
  sprintBoardDetails: Array<TBoardType>;
}

export interface TProjectDetailsType {
  _id: string;
  projectName: string;
  projectDescription: string;
  projectMembers: Array<User>;
  isProjectDetailsEditAccess: Array<string>;
  projectCreatedBy: string;
  projectCreatedDate: Date;
  projectUpdatedDate: Array<Date>;
  projectUpdatedHistory: Array<string>;
  isProjectDeleted: boolean;
  isProjectDisabled: boolean;
  projectStatus: boolean;
  projectState: "public" | "private";
  projectSprintDetails: Array<TSprintType>;
}
