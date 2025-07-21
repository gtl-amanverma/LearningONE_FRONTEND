import CustomAnimateToolTip from "@/components/animate_tooltip/component";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/context-menu/ui";
import { TBoardProjectType } from "@/types/board_type";
import { IconMenu } from "@tabler/icons-react";
import moment from "moment";
import React, { useState } from "react";

type props = {
  project: TBoardProjectType;
  onClick?: (data: TBoardProjectType) => void;
};

const ProjectCard = ({ ...props }: props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center justify-center rounded-md text-sm flex-shrink-0 select-none">
        <div className="md:w-80 md:h-80 bg-gray-700 p-4 rounded-2xl shadow-xl shadow-gray-800 cursor-pointer flex flex-col items-center justify-between">
          <div className="w-full">
            <div className="w-full flex items-start justify-between relative">
              <p className="text-xl forn-normal font-poppins">
                {props.project.projectName}
              </p>
              <IconMenu
                onClick={() => setOpen((prev) => !prev)}
                className="flex-shrink-0"
              />
              {open && (
                <div className="absolute right-0 top-6 h-24 w-20 bg-gray-600 z-50 rounded-md shadow-2xl p-2 flex items-center justify-start flex-col gap-2">
                  <div className="w-full border-b border-gray-500 text-xs">
                    Edit
                  </div>
                  <div className="w-full border-b border-gray-500 text-xs">
                    Delete
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <p>{props.project.projectDescription}</p>
            </div>
            <div className="mt-5">
              <p>{`Project Created: ${moment(
                props.project.projectCreatedDate
              ).fromNow()}`}</p>
              <p>{`Project Updated: ${moment(
                props.project.projectUpdatedDate
              ).fromNow()}`}</p>
            </div>
            <div className="mt-5">
              <p>{`Total Members: ${props.project.projectMembers.length}`}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full p-2">
              <CustomAnimateToolTip size="8" />
            </div>
            <div className="w-full p-2">
              <button
                onClick={() => props.onClick && props.onClick(props.project)}
                className="w-full bg-amber-500 p-2 rounded-md text-gray-700 font-bold cursor-pointer"
              >
                Open board
              </button>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52 bg-gray-700 border border-gray-500 shadow-2xl">
        <ContextMenuItem
          inset
          className="cursor-pointer text-blue-500 hover:bg-gray-600"
        >
          Edit project
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          className="text-red-500 cursor-pointer hover:bg-gray-600"
        >
          Delete project
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ProjectCard;
