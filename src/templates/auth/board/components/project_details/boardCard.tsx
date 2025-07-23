import { TBoardType, TTaskType } from "@/types/board_type";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import React, { useCallback } from "react";
import TaskCard from "./taskcard";

type props = {
  boardDetails: TBoardType;
  setTask?: (task: TTaskType | null) => void;
};

const BoardCard = ({ boardDetails, setTask }: props) => {
  const [board, setBoard] = React.useState<TBoardType>(boardDetails);

  const handleAddTask = useCallback(() => {
    const newTask: TTaskType = {
      taskId: crypto.randomUUID(), // or fallback if needed
      taskName: "New Task",
      taskDescription: null,
      taskType: null,
      taskAssignedTo: null,
      taskReportedTo: null,
      taskOriginalEstimatedTime: null,
      taskCompletedTime: null,
      taskRemainingTime: null,
      taskStoryPoints: null,
      taskComments: null,
      taskStatus: "TO DO",
      taskCreatedDate: new Date(),
    };

    setBoard((prevBoard) => ({
      ...prevBoard,
      boardTasks: [...prevBoard.boardTasks!, newTask],
    }));
  }, []);

  return (
    <div className="w-[31rem] bg-gray-700 h-[50rem] flex-shrink-0 rounded-2xl">
      <div className="w-full border-b rounded-t-2xl p-4 border-gray-600 flex items-center justify-between gap-2">
        <div className="flex items-center justify-center gap-2">
          <p className="text-xl text-gray-400">{board.boardName}</p>
          <IconEdit className="text-gray-400 cursor-pointer" />
        </div>
        <div>
          {board.boardName === "TO DO" && (
            <div
              onClick={handleAddTask}
              className="bg-gray-600 p-1 rounded-sm cursor-pointer"
            >
              <IconPlus />
            </div>
          )}
        </div>
      </div>

      <div className="h-[calc(100vh-480px)] p-4">
        {board.boardTasks && board.boardTasks.length > 0 ? (
          <div className="w-full h-full flex flex-col items-start justify-start gap-2 overflow-auto scrollbar-hide">
            {board.boardTasks.map((task: TTaskType, index) => {
              return (
                <div
                  key={index}
                  className="w-full"
                  onMouseEnter={() => setTask && setTask(task)}
                  onMouseLeave={() => setTask && setTask(null)}
                >
                  <TaskCard taskDetails={task} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xl">
            No Task
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardCard;
