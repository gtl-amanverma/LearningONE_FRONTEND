import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover/ui";
import { Button } from "../button/ui";
import { Badge } from "../badge/ui";
import { UserAvatar } from "../avatar/component";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command/ui";
import { cn } from "@/utils/cn";
import { User } from "@/types/board";

interface MultiSelectUsersProps {
  allUsers: User[];
  selectedUserIds: string[];
  onChange: (selectedUserIds: string[]) => void;
  placeholder?: string;
}

export function MultiSelectUsers({
  allUsers,
  selectedUserIds,
  onChange,
  placeholder = "Select users...",
}: MultiSelectUsersProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (userId: string) => {
    const newSelectedUserIds = selectedUserIds.includes(userId)
      ? selectedUserIds.filter((id) => id !== userId)
      : [...selectedUserIds, userId];
    onChange(newSelectedUserIds);
  };

  const selectedUsers = allUsers.filter((user) =>
    selectedUserIds.includes(user.userId)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-auto min-h-10 bg-gray-700 border-none"
        >
          <div className="flex flex-wrap gap-1">
            {selectedUsers.length > 0 ? (
              selectedUsers.map((user) => (
                <Badge
                  variant="secondary"
                  key={user.userId}
                  className="mr-1 mb-1 rounded-sm px-1.5 py-0.5 flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(user.userId);
                  }}
                >
                  <UserAvatar user={user} size="sm" />
                  <span className="ml-1">{user.username}</span>
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
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-gray-700 border-none">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandList>
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {allUsers.map((user) => (
                <CommandItem
                  key={user.userId}
                  value={user.username}
                  onSelect={() => {
                    handleSelect(user.userId);
                    // setOpen(false); // Keep open for multi-select
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedUserIds.includes(user.userId)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  <UserAvatar user={user} size="sm" />
                  <span className="ml-2">{user.username}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
