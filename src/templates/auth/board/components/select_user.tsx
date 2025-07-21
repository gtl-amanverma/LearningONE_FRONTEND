import { Badge } from "@/components/badge/ui";
import { Button } from "@/components/button/ui";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command/ui";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/ui";
import { User } from "@/types/loggedin_user.type";
import { cn } from "@/utils/cn";
import { Check, ChevronsUpDown, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

interface MultiSelectUsersProps {
  selectedUserIds?: User[];
  onChange?: (selectedUsers: User[]) => void;
  placeholder?: string;
  popoverRef?: React.RefObject<HTMLDivElement> | null;
}

const SelectUsers = ({
  selectedUserIds,
  onChange,
  placeholder = "Select users...",
  popoverRef,
}: MultiSelectUsersProps) => {
  const [open, setOpen] = useState(false);
  const [userList, setUserList] = useState<Array<User>>([]);

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
      setUserList(result.data.users);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setUserList([]);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSelect = (user: User) => {
    const isSelected = selectedUserIds?.some((u) => u.id === user.id);
    const updatedSelectedUsers = isSelected
      ? selectedUserIds!.filter((u) => u.id !== user.id)
      : [...selectedUserIds!, user];
    onChange!(updatedSelectedUsers);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-64 w-full justify-between h-auto min-h-10 bg-gray-700 border-gray-600"
        >
          <div className="flex flex-wrap gap-1">
            {selectedUserIds && selectedUserIds.length > 0 ? (
              selectedUserIds.map((user) => (
                <Badge
                  variant="secondary"
                  key={user.id}
                  className="mr-1 mb-1 rounded-sm px-1.5 py-0.5 flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(user);
                  }}
                >
                  <span className="ml-1">{user.userName}</span>
                  <X className="ml-1 h-3 w-3 cursor-pointer" />
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        ref={popoverRef}
        className="w-[--radix-popover-trigger-width] p-0 bg-gray-600 border-none"
      >
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandList>
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {userList.map((user) => {
                const isSelected = selectedUserIds?.some(
                  (u) => u.id === user.id
                );
                return (
                  <CommandItem
                    key={user.id}
                    value={user.userName}
                    onSelect={() => handleSelect(user)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        isSelected ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span className="ml-2">{user.userName}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectUsers;
