import { X } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SelectUsers from "./select_user";
// import { TBoardUserType } from "@/types/board_type";
import { User } from "@/types/loggedin_user.type";
import { useAuth } from "@/context/auth_context";

type props = {
  setIsOpenCreateProject: (value: boolean) => void;
  setIsRefresh: (value: boolean) => void;
  isRefresh: boolean;
};

const CreateProjectForm = ({ ...props }: props) => {
  const { token } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [selectedUserIds, setSelectedUserIds] = useState<User[]>([]);
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        popoverRef.current &&
        !popoverRef.current.contains(target)
      ) {
        props.setIsOpenCreateProject(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [props]);

  const handleCreateProject = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:6001/api/v1/private/auth/user/fetch/create-project?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            projectName: projectTitle,
            projectDescription: projectDescription,
            projectMembers: selectedUserIds.map((user) => {
              return {
                userId: user.id,
                userName: user.userName,
                userEmail: user.userEmail,
                userProfileImage: null,
              };
            }),
            projectState: "private",
          }),
        }
      );
      const result = await response.json();
      if ("Success" in result && result.Success) {
        props.setIsRefresh(!props.isRefresh);
        props.setIsOpenCreateProject(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }, [projectDescription, projectTitle, props, selectedUserIds, token]);

  return (
    <div className="w-screen h-screen bg-[#37415199] bg-opacity-50 absolute left-0 top-0 z-40 flex items-center justify-center">
      <div
        ref={modalRef}
        className="w-[60%] h-[60%] bg-gray-700 shadow-2xl rounded-2xl z-50 p-4 relative"
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Create Project</h1>
          </div>
          <div>
            <X
              onClick={() => props.setIsOpenCreateProject(false)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <div>
            <p>Project Name:</p>
            <input
              value={projectTitle ?? ""}
              onChange={(event) => setProjectTitle(event.target.value)}
              placeholder="write a project title here..."
              className="w-full bg-gray-600 outline-none p-2 rounded-md"
            />
          </div>
          <div className="mt-3">
            <p>Project Description:</p>
            <textarea
              value={projectDescription ?? ""}
              onChange={(event) => setProjectDescription(event.target.value)}
              placeholder="write a description here..."
              className="w-full bg-gray-600 outline-none p-2 min-h-16 max-h-40 rounded-md scrollbar-hide"
            />
          </div>
          <div>
            <p>Project Members:</p>
            <SelectUsers
              selectedUserIds={selectedUserIds}
              onChange={setSelectedUserIds}
              popoverRef={popoverRef as React.RefObject<HTMLDivElement>}
            />
          </div>

          <div className="w-full absolute bottom-0 left-0 p-4">
            <button
              onClick={handleCreateProject}
              className="w-full bg-amber-600 p-2 rounded-md cursor-pointer"
            >
              Create Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectForm;
