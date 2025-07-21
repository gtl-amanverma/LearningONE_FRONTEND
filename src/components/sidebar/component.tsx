"use client";

import { useAuth } from "@/context/auth_context";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";

type props = {
  children?: React.ReactNode;
  padding?: string;
};

interface MenuType {
  name: string;
  value: string;
}

const unAuthMenus: Array<MenuType> = [
  {
    name: "Login",
    value: "login",
  },
  {
    name: "Register",
    value: "register",
  },
];
const authMenus: Array<MenuType> = [
  {
    name: "Dashboard",
    value: "dashboard",
  },
  {
    name: "Chatbot",
    value: "chatbot",
  },
  {
    name: "Quizz",
    value: "quizz",
  },
  {
    name: "Messages",
    value: "messages",
  },
  {
    name: "Convert Audio",
    value: "convert_audio",
  },
  {
    name: "Draw",
    value: "draw",
  },
  {
    name: "Board",
    value: "board",
  },
];

const CustomSidebar = ({ ...props }: props) => {
  const { logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const menuItems: Array<MenuType> = isAuthenticated ? authMenus : unAuthMenus;

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <div className="w-screen h-screen">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 relative">
          <ul className="space-y-2 font-medium">
            {menuItems?.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    onClick={() => {
                      router.push(`/auth/${item.value.toLocaleLowerCase()}`);
                    }}
                    className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      lastSegment === item.value.toLocaleLowerCase() &&
                      "bg-gray-700"
                    } transition-all`}
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">{item.name}</span>
                  </a>
                </li>
              );
            })}
            {isAuthenticated && (
              <li className="absolute bottom-4 left-0 w-full">
                <a
                  onClick={handleLogout}
                  className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-red-500 group-hover:text-red-500 dark:group-hover:text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3 text-red-500">Logout</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>

      <div className={`p-4 sm:ml-64`}>
        <div
          className={`${
            props.padding ? props.padding : "p-4"
          } border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CustomSidebar;
