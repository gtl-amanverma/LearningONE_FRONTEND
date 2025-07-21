export interface TUserType {
  userId: string;
  userName: string;
  userEmail: string;
  userProfileImage: string;
}

export interface TTaskType {
  taskId: string;
  taskName: string | null;
  taskDescription: string | null;
  taskType: string | null;
  taskAssignedTo: TUserType | null;
  taskReportedTo: TUserType | null;
  taskOriginalEstimatedTime: number | null;
  taskCompletedTime: number | null;
  taskRemainingTime: number | null;
  taskStoryPoints: Array<string> | null;
  taskComments: Array<string> | null;
  taskCreatedDate: Date;
}

export interface TBoardType {
  boardId: string;
  boardName: string | null;
  isDisabled: boolean;
  boardTasks: Array<TTaskType> | null;
}

export interface TSprintType {
  sprintId: string;
  sprintName: string;
  sprintStartDate: Date;
  sprintEndDate: Date;
  isActiveSprint: boolean;
  sprintBoardDetails: Array<TBoardType>;
}

export interface TProjectType {
  projectId: string;
  projectName: string | null;
  projectDescription: string | null;
  projectMembers: Array<TUserType> | null;
  isProjectDetailsEditAccess: Array<string> | null;
  projectCreatedBy: string | null;
  projectCreatedDate: Date | null;
  projectUpdatedDate: Array<Date> | null;
  projectUpdatedHistory: Array<string> | null;
  isProjectDeleted: boolean;
  isProjectDisabled: boolean;
  projectStatus: boolean;
  projectState: "public" | "private";
  projectSprintDetails: Array<TSprintType> | null;
}
