export interface TUserType {
  id: string;
  userName: string;
  userEmail: string;
  userGender: string;
  userRole: string;
}

export interface TMessageUserType {
  chatId: string;
  chatName: string | null;
  lastestMessage: string | null;
  chatMembers: Array<TUserType>;
  chatCreateDate: Date;
  chatDeleted: boolean;
  chatAdmin: Array<TUserType>;
  chatType: "public" | "private" | "personal";
  chatUpdatedData: {
    updatedData: string;
    date: Date;
  }[];
}
