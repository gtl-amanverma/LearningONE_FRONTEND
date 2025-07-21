import { Label } from "@/components/label/ui";
import { useAuth } from "@/context/auth_context";
import { User } from "@/types/loggedin_user.type";
import { IconMessage } from "@tabler/icons-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCreateGroup?: () => void;
  isGroupFormOpen?: boolean;
  isRefresh: boolean;
  setIsRefresh: (value: boolean) => void;
};

const UserListMessageHeader = ({
  onChange,
  onClickCreateGroup,
  isGroupFormOpen,
  isRefresh,
  setIsRefresh,
}: Props) => {
  const { loggedInUserDetails, token } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBounce, setIsBounce] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userList, setUserList] = useState<User[]>([]);
  const [filteredList, setFilteredList] = useState<User[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fetch users from GraphQL API
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

  const handleInputClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsBounce(true);
      setTimeout(() => setIsBounce(false), 500);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchUsers(searchText);
    }, 300); // Debounce search

    return () => clearTimeout(handler);
  }, [fetchUsers, searchText]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsBounce(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCreateChat = useCallback(
    async (userId: string) => {
      try {
        const response = await fetch(
          `http://localhost:6001/api/v1/private/auth/user/fetch/create-message-user?token=${token}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chatMembers: [loggedInUserDetails?.id, userId],
              chatType: "private",
            }),
          }
        );
        const result = await response.json();
        if ("Success" in result && result.Success) {
          setIsRefresh(!isRefresh);
        } else {
          return;
        }
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        throw new Error(error as any);
      }
    },
    [isRefresh, loggedInUserDetails?.id, setIsRefresh, token]
  );

  return (
    <div
      className="bg-gray-800 w-full p-4 flex items-center justify-between border-b border-dashed border-gray-700 gap-4 relative"
      ref={wrapperRef}
    >
      <div className="flex items-center justify-center gap-2">
        <p className={`font-bold text-2xl flex items-center gap-2`}>
          {isGroupFormOpen ? "Create Group" : "Chat"}
          <span
            onClick={onClickCreateGroup}
            className="cursor-pointer text-3xl select-none text-right"
          >
            {isGroupFormOpen ? "-" : "+"}
          </span>
        </p>
      </div>
      {!isGroupFormOpen && (
        <div className="flex items-center justify-center gap-2 w-[50%]">
          <input
            placeholder="Search user..."
            onClick={handleInputClick}
            onChange={(e) => {
              setSearchText(e.target.value);
              onChange?.(e);
            }}
            value={searchText}
            className="bg-gray-700 outline-none w-full rounded-full p-2 px-4 text-xs placeholder:text-gray-500"
          />
        </div>
      )}
      {isOpen && (
        <div
          className={`bg-gray-700 absolute w-[46.5%] h-64 z-50 right-4 -bottom-[15.5rem] rounded-xl overflow-y-auto p-4 ${
            isBounce ? "animate-bounce" : ""
          } scrollbar-hide`}
        >
          {filteredList.length > 0 ? (
            filteredList.map((user, index) => (
              <div
                key={index}
                className="p-2 text-xs text-white border-b border-gray-600 flex items-center justify-between cursor-pointer"
                onClick={() => handleCreateChat(String(user.id))}
              >
                {user.userName}
                <IconMessage className="w-5 h-5" />
              </div>
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Label>No user found!</Label>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserListMessageHeader;
