import React, { useState } from "react";
import CreateProjectForm from "./components/create_project_form";
import ProjectCard from "./components/project_card";
import { TBoardProjectType } from "@/types/board_type";
import { IconLoader } from "@tabler/icons-react";
import ProjectDetails from "./components/project_details";

type props = {
  isOpenCreateProject: boolean;
  setIsOpenCreateProject: (value: boolean) => void;
  projectList: Array<TBoardProjectType>;
  setIsRefresh: (value: boolean) => void;
  isApiLoading: boolean;
  isRefresh: boolean;
};

const BoardLayoutTemplate = ({ ...props }: props) => {
  const [project, setProject] = useState<TBoardProjectType | null>(null);

  return (
    <div className="w-full p-4 flex flex-col items-center justify-start overflow-auto scrollbar-hide">
      {!project && (
        <div className="w-full flex items-center justify-between">
          <h1 className="text-4xl font-bold">Projects</h1>
          <button
            onClick={() => props.setIsOpenCreateProject(true)}
            className="bg-gray-700 p-4 px-6 rounded-lg cursor-pointer"
          >
            Create project +
          </button>
          {props.isOpenCreateProject && (
            <CreateProjectForm
              setIsOpenCreateProject={props.setIsOpenCreateProject}
              setIsRefresh={props.setIsRefresh}
              isRefresh={props.isRefresh}
            />
          )}
        </div>
      )}
      {!project && (
        <div className="w-full mt-5 grid grid-cols-5 gap-6 mb-10">
          {props.projectList.length > 0 ? (
            <>
              {props.isApiLoading && (
                <div>
                  <IconLoader className="animate-spin" />
                </div>
              )}
              {props.projectList.map((project, index) => {
                return (
                  <div key={index} className="w-full">
                    <ProjectCard
                      project={project}
                      onClick={(data) => setProject(data)}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <div>No Projects</div>
          )}
        </div>
      )}

      {project && (
        <div className="w-full">
          <ProjectDetails
            projectId={project.projectId}
            onClose={() => setProject(null)}
          />
        </div>
      )}
    </div>
  );
};

export default BoardLayoutTemplate;
