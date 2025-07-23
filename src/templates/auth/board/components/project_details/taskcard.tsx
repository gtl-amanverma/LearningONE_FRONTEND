import { TTaskType } from "@/types/board_type";
import { IconTicket } from "@tabler/icons-react";
import React from "react";

type props = {
  taskDetails: TTaskType;
};

const TaskCard = ({ taskDetails }: props) => {
  const [task, setTask] = React.useState<TTaskType>(taskDetails);
  return (
    <div className="w-full bg-gray-600 min-h-12 rounded-2xl flex-shrink-0 p-4">
      <div className="w-full flex items-center justify-start gap-2">
        <IconTicket />
        <p>{123456}</p>
      </div>
      <div className="w-full flex items-center justify-start gap-2">
        <p>{task.taskName}</p>
      </div>
    </div>
  );
};

export default TaskCard;
