import React, { useCallback, useEffect, useState } from "react";
import UserListMessageHeader from "./components/header";
import MessageUserDetails from "./components/user_details";
import { TMessageUserType } from "@/types/message_user_type";
import { useAuth } from "@/context/auth_context";
import { IconLoader3 } from "@tabler/icons-react";
import MessageCreateGroup from "../create_group/template";

type props = {
  onClick?: (data: TMessageUserType) => void;
  setOpen: (value: null) => void;
};

const MessageUsersList = ({ ...props }: props) => {
  const { token, isAuthenticated } = useAuth();
  const [messageUsers, setMessageUsers] = useState<Array<TMessageUserType>>([]);
  const [isApiLoading, setIsApiLoading] = useState<boolean>(false);
  const [isGroupFormOpen, setIsGroupFormOpen] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  const fetchMessageUsers = useCallback(async () => {
    setIsApiLoading(true);
    if (!token) {
      console.warn("Token is missing, skipping fetch.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:6001/api/v1/private/auth/user/fetch/list-message-user?token=${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const contentType = response.headers.get("content-type");
      if (!response.ok || !contentType?.includes("application/json")) {
        const raw = await response.text(); // fallback for HTML/error pages
        console.error("Unexpected response (not JSON):", raw);
        return;
      }

      const result = await response.json();

      if (result?.Success && Array.isArray(result?.Data)) {
        setMessageUsers(result.Data);
      } else {
        console.warn("No message users found or bad response format.");
        setMessageUsers([]);
      }
      setIsApiLoading(false);
    } catch (error) {
      console.error("Failed to fetch message users:", error);
    }
  }, [token]);

  useEffect(() => {
    if (token && isAuthenticated) {
      fetchMessageUsers();
    }
  }, [token, isAuthenticated, fetchMessageUsers, isGroupFormOpen, isRefresh]);

  return (
    <div className="w-[50rem] h-full flex flex-col items-center justify-center">
      <div className="w-full">
        <UserListMessageHeader
          onClickCreateGroup={() => setIsGroupFormOpen((prev) => !prev)}
          isGroupFormOpen={isGroupFormOpen}
          isRefresh={isRefresh}
          setIsRefresh={setIsRefresh}
        />
      </div>
      {!isGroupFormOpen ? (
        <div className="w-full h-[calc(100vh-120px)] border-l border-r border-dashed border-gray-700 p-4 overflow-y-auto flex flex-col items-center justify-start gap-2 scrollbar-hide">
          {isApiLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <IconLoader3 className="animate-spin" />
            </div>
          ) : (
            <>
              {messageUsers && messageUsers?.length > 0 ? (
                <>
                  {messageUsers?.map((item, index) => {
                    return (
                      <div key={index} className="w-full">
                        <MessageUserDetails
                          item={item as TMessageUserType}
                          onClick={(data) =>
                            props.onClick && props.onClick(data)
                          }
                          setIsRefresh={setIsRefresh}
                          isRefresh={isRefresh}
                        />
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <h2 className="text-xl">No Users</h2>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-120px)] border-l border-r border-dashed border-gray-700 p-4">
          <MessageCreateGroup
            setIsGroupFormOpen={setIsGroupFormOpen}
            setOpen={props.setOpen}
          />
        </div>
      )}
    </div>
  );
};

export default MessageUsersList;
