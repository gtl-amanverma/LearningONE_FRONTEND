import { useAuth } from "@/context/auth_context";
import { TProjectDetailsType, TTaskType } from "@/types/board_type";
import {
  IconLoader,
} from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import ProjectUserButton from "./project_details/project_users_button";
import CustomSearchInput from "@/components/search_input/component";
import SelectUsers from "./select_user";
import SelectSprint from "./project_details/sprint_select";
import { TSprintType } from "@/mocks/board_data_with_type";
import CustomAccordion from "@/components/accordion/component";
import BoardCard from "./project_details/boardCard";

type props = {
  projectId: string;
  onClose?: () => void;
};

const ProjectDetails = ({ ...props }: props) => {
  const { token } = useAuth();
  const [isApiLoading, setIsApiLoading] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] = useState<TProjectDetailsType>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedSprint, setSelectedSprint] = useState<TSprintType | null>(
    null
  );
  const [hoveredTask, setHoveredTask] = useState<TTaskType | null>(null);

  console.log("hoveredTask", hoveredTask);

  const handleFetchProjectDetails = useCallback(async () => {
    try {
      setIsApiLoading(true);
      const response = await fetch(
        `http://localhost:6001/api/v1/private/auth/user/fetch/details-project?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            projectId: props.projectId,
          }),
        }
      );
      const result = await response.json();
      if ("Success" in result && result.Success) {
        setProjectDetails(result.Data);
      }
      setIsApiLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  }, [props.projectId, token]);

  useEffect(() => {
    handleFetchProjectDetails();
  }, [handleFetchProjectDetails, isRefresh]);

  return (
    <div className="w-full text-white">
      {isApiLoading ? (
        <div className="w-full h-[calc(100vh-165px)] flex items-center justify-center">
          <IconLoader className="animate-spin" />
        </div>
      ) : (
        <div className="w-full">
          <div className="mb-4 w-full flex items-start justify-between">
            <button
              onClick={props.onClose}
              className="text-xs p-2 bg-amber-500 cursor-pointer text-gray-700 rounded-lg px-4"
            >
              Close X
            </button>
            <div className="flex flex-col items-center justify-end">
              <h1 className="text-3xl font-semibold">
                {projectDetails?.projectName}
              </h1>
              <p className="text-sm mt-1">
                {projectDetails?.projectDescription}
              </p>
            </div>
          </div>
          <div className="w-full p-4 bg-gray-700 mt-5 rounded-md flex flex-wrap items-center justify-between gap-4">
            <div>
              <CustomSearchInput
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search..."
                onClear={() => setSearchValue("")}
              />
            </div>
            <div>
              <SelectUsers />
            </div>
            <div>
              <SelectSprint
                items={
                  projectDetails?.projectSprintDetails as Array<TSprintType>
                }
                onClick={(data) => setSelectedSprint(data as TSprintType)}
                selectedSprint={selectedSprint}
              />
            </div>
            <div>
              <ProjectUserButton
                totalMember={projectDetails?.projectMembers.length as number}
                setIsRefresh={setIsRefresh}
                isRefresh={isRefresh}
              />
            </div>
          </div>

          <div>
            {projectDetails?.projectSprintDetails.map((sprint, index) => {
              return (
                <div key={index} className="mt-5">
                  <CustomAccordion title={sprint.sprintName}>
                    <div className="mt-5 w-full flex flex-row items-center justify-between gap-2 overflow-x-auto scrollbar-hide">
                      {sprint.sprintBoardDetails.map((board, index) => {
                        return (
                          <div key={index}><BoardCard boardDetails={board} setTask={setHoveredTask} /></div>
                        );
                      })}
                    </div>
                  </CustomAccordion>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
