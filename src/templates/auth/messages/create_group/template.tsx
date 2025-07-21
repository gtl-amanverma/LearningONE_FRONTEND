import { useAuth } from "@/context/auth_context";
import { User } from "@/types/loggedin_user.type";
import { IconUser, IconUsersGroup } from "@tabler/icons-react";
import { X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

type props = {
  groupName?: string;
  members?: Array<string | number>;
  usersList?: Array<User>;
  setIsGroupFormOpen: (value: boolean) => void;
  setOpen: (value: null) => void;
};

const MessageCreateGroup = ({ ...props }: props) => {
  const { loggedInUserDetails, token } = useAuth();
  const [groupName, setGroupName] = useState<string>("");
  const [member, setMember] = useState<Array<string | number>>(
    props.members ?? []
  );
  const [open, setOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [userList, setUserList] = useState<User[]>([]);
  const [filteredList, setFilteredList] = useState<User[]>([]);

  const fetchUsers = useCallback(
    async (query: string) => {
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

        const result = await response.json();
        const usersFromAPI: User[] = result.data?.users || [];

        // Exclude the logged-in user
        const filteredUsers = usersFromAPI.filter(
          (user) => user.id !== loggedInUserDetails?.id
        );

        if (query.trim() === "") {
          setFilteredList(filteredUsers);
        } else {
          const matches = filteredUsers.filter((user) =>
            user.userName.toLowerCase().includes(query.toLowerCase())
          );

          if (matches.length > 0) {
            const exactMatch = matches.find(
              (user) => user.userName.toLowerCase() === query.toLowerCase()
            );
            const sortedMatches = exactMatch
              ? [exactMatch, ...matches.filter((u) => u !== exactMatch)]
              : matches;

            setFilteredList(sortedMatches);
          } else {
            setFilteredList([]);
          }
        }

        setUserList(filteredUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setFilteredList([]);
      }
    },
    [loggedInUserDetails?.id]
  );
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchUsers(searchText);
    }, 300); // Debounce search

    return () => clearTimeout(handler);
  }, [fetchUsers, searchText]);

  const handleCreateGroup = useCallback(async () => {
    try {
      if (!groupName || groupName.trim() === "") {
        return;
      }
      if (member.length < 0) {
        return;
      }
      const response = await fetch(
        `http://localhost:6001/api/v1/private/auth/user/fetch/create-message-user?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatName: groupName,
            chatMembers: member,
            chatType: "public",
          }),
        }
      );
      const result = await response.json();
      if ("Success" in result && result.Success) {
        if (props.setIsGroupFormOpen) {
          props.setIsGroupFormOpen(false);
        }
        if (props.setOpen) {
          props.setOpen(null);
        }
      } else {
        return;
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new Error(error as any);
    }
  }, [groupName, member, props, token]);

  return (
    <div className="w-full h-full  flex flex-col items-center justify-start gap-2 relative">
      <div className="border border-dashed border-gray-500 w-32 h-32 rounded-full overflow-hidden p-6">
        <IconUsersGroup className="text-gray-500 w-full h-full" />
      </div>
      <div className="mt-5 w-full flex flex-col">
        <p className="text-gray-500 text-xs">Group Name:</p>
        <input
          placeholder="Group name..."
          onChange={(event) => setGroupName(event.target.value)}
          value={props.groupName ?? groupName ?? ""}
          className="mt-2 bg-gray-700 outline-none p-2 rounded-md text-xs"
        />
      </div>
      <div className="mt-5 w-full flex flex-col relative">
        <p className="text-gray-500 text-xs">Select Team:</p>
        <input
          placeholder="Search team member..."
          onChange={(e) => {
            setSearchText(e.target.value);
            setOpen(true);
          }}
          value={searchText}
          className="mt-2 bg-gray-700 outline-none p-2 rounded-md text-xs"
        />
        <div className="w-full mt-5 rounded-md flex flex-wrap items-start justify-start gap-2">
          {member.map((user, index) => {
            const userDetails = userList.find(
              (u) => String(u.id) === String(user)
            ) as User;
            return (
              <div
                key={index}
                className="bg-gray-700 p-2 px-6 rounded-3xl text-xs flex items-center justify-center gap-2"
              >
                <span>{userDetails.userName}</span>
                <X
                  onClick={() => {
                    setMember((prev) => {
                      const id = String(user); // ensure string type
                      const isAlreadyAdded = prev.includes(id);

                      if (isAlreadyAdded) {
                        // remove the id
                        return prev.filter((userId) => userId !== id);
                      } else {
                        // add the id
                        return [...prev, id];
                      }
                    });
                  }}
                  className="w-4 h-4 cursor-pointer"
                />
              </div>
            );
          })}
        </div>

        {/* Open Modal */}
        {open && (
          <div className="absolute z-50 left-0 w-full h-96 bg-gray-700 -bottom-92 rounded-md p-2">
            <div className="w-full flex items-center justify-between gap-2 border-b border-gray-500">
              <p className="text-lg font-bold text-gray-400">Users</p>
              <p
                onClick={() => setOpen(false)}
                className="cursor-pointer flex text-xs items-center justify-center gap-2 text-red-400"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </p>
            </div>

            {filteredList.length > 0
              ? filteredList.map((user, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setMember((prev) => {
                          const id = String(user.id);
                          const isAlreadyAdded = prev.includes(id);
                          if (!isAlreadyAdded) {
                            return [...prev, user.id];
                          }
                          return prev;
                        });
                        setOpen(false);
                      }}
                      className="mt-5 w-full border-b border-gray-500 text-xs flex items-center justify-start gap-2 py-2 hover:bg-gray-500 hover:rounded-md px-4 cursor-pointer"
                    >
                      <IconUser className="w-5 h-5" />
                      <p>{user.userName}</p>
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full flex flex-col">
        <button
          onClick={handleCreateGroup}
          className="bg-blue-700 p-3 text-xs font-bold rounded-md cursor-pointer"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default MessageCreateGroup;
