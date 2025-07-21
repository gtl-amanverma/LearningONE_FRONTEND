"use client";

import { useAuth } from "@/context/auth_context";
import { BoardHeader } from "@/templates/auth/board/components/header";
import BoardLayoutTemplate from "@/templates/auth/board/tempalte";
import { TBoardProjectType } from "@/types/board_type";
import React, { useCallback, useEffect, useState } from "react";

const BoardLayout = () => {
  const { token } = useAuth();
  const [isOpenCreateProject, setIsOpenCreateProject] =
    useState<boolean>(false);
  const [isApiLoading, setIsApiLoading] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [projectList, setProjectList] = useState<Array<TBoardProjectType>>([]);

  const handleFetchProjectList = useCallback(async () => {
    try {
      setIsApiLoading(true);
      const response = await fetch(
        `http://localhost:6001/api/v1/private/auth/user/fetch/list-projects?token=${token}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const text = await response.text();
      const result = JSON.parse(text);
      setProjectList(result.Data);
      setIsApiLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  }, [token]);

  useEffect(() => {
    handleFetchProjectList();
  }, [handleFetchProjectList, isRefresh]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-start">
      <BoardHeader />
      <BoardLayoutTemplate
        isOpenCreateProject={isOpenCreateProject}
        setIsOpenCreateProject={setIsOpenCreateProject}
        projectList={projectList}
        setIsRefresh={setIsRefresh}
        isApiLoading={isApiLoading}
        isRefresh={isRefresh}
      />
    </div>
  );
};

export default BoardLayout;
