import { User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui";
import { User } from "@/types/board";

interface UserAvatarProps {
  user?: User;
  size?: "sm" | "md" | "lg";
}

export function UserAvatar({ user, size = "md" }: UserAvatarProps) {
  const getInitials = (name: string) => {
    const names = name.split(" ");
    let initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  const avatarSizeClass =
    size === "sm" ? "h-8 w-8 text-xs" : size === "lg" ? "h-10 w-10" : "h-8 w-8";
  const fallbackIconSizeClass =
    size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";

  if (!user) {
    return (
      <Avatar className={avatarSizeClass}>
        <AvatarFallback className="bg-muted text-muted-foreground p-1">
          <UserIcon className={fallbackIconSizeClass} />
        </AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Avatar className={avatarSizeClass}>
      {user.avatar && !user.avatar.startsWith("http") ? null : (
        <AvatarImage src={user.avatar} alt={user.username} />
      )}
      <AvatarFallback className="bg-gray-700 text-xs p-2 font-semibold">
        {user.avatar && !user.avatar.startsWith("http")
          ? user.avatar
          : getInitials(user.username)}
      </AvatarFallback>
    </Avatar>
  );
}
