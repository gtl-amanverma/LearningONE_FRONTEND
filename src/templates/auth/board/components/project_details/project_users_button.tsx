import { User } from "@/types/loggedin_user.type";
import { IconUser } from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";

type props = {
  setIsRefresh: (value: boolean) => void;
  isRefresh: boolean;
  totalMember: number;
};

const ProjectUserButton = ({ ...props }: props) => {
  const [userList, setUserList] = useState<Array<User>>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedUserIds, setSelectedUserIds] = useState<Array<User>>([]);
  const [open, setOpen] = useState<boolean>(false);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
                    query {
                      users {
                        id
                        userName
                        userEmail
                        userGender
                        userRole
                      }
                    }
                  `,
        }),
      });

      const text = await response.text();
      const result = JSON.parse(text);
      setUserList(
        result.data.users.map((user: User) => {
          return {
            userId: user.id,
            userName: user.userName,
            userEmail: user.userEmail,
            userProfileImage: null,
          };
        })
      );
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setUserList([]);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSelectUnselectUser = useCallback((user: User) => {}, []);

  return (
    <div className="">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-gray-600 flex items-center justify-center gap-2 p-2 text-xs w-[15.3rem] cursor-pointer rounded-md"
      >
        <span>
          <IconUser className="w-4 h-4" />
        </span>
        <span>Total members</span>
        <span>{props.totalMember}</span>
      </button>
      {open && (
        <div className="w-[15.3rem] h-56 bg-gray-600 absolute top-[15rem] rounded-md right-12 z-50 overflow-auto scrollbar-hide p-4 shadow-2xl">
          {userList.map((user, index) => {
            const isMatched = selectedUserIds.some(
              (selectedUser) => String(selectedUser.id) === String(user.id)
            );

            return (
              <div
                key={user.id || index}
                className="border-b border-gray-600 py-2 flex items-center justify-start gap-2"
              >
                <span
                  key={user.id}
                  onClick={() => handleSelectUnselectUser(user)}
                  className="border-2 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer"
                >
                  {isMatched ? "✓" : ""}
                </span>
                <span>{user.userName}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectUserButton;
