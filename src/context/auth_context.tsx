"use client";

import { useRouter } from "next/navigation";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { jwtDecode } from "jwt-decode";
import { User } from "@/types/loggedin_user.type";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string;
  login: (email: string, password: string) => void;
  register: (
    userName: string,
    email: string,
    password: string,
    userGender: string
  ) => void;
  logout: () => void;
  loggedInUserDetails: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [loggedInUserDetails, setLoggedInUserDetails] = useState<User | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const user = localStorage.getItem("loggedin_user");

    if (token && user) {
      setIsAuthenticated(true);
      setLoggedInUserDetails(JSON.parse(user));
      setToken(token as string);
    }
  }, []);

  const register = useCallback(
    async (
      userName: string,
      email: string,
      password: string,
      userGender: string
    ) => {
      const query = `
        mutation {
          registerUser(
            userName: "${userName}",
            userEmail: "${email}",
            userPassword: "${password}",
            userRole: admin,
            userGender: "${userGender}"
          ) {
            id
            userName
            userEmail
            userRole
            userGender
          }
        }
      `;

      try {
        const response = await fetch("http://localhost:5000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();

        if (result.data) {
          router.push("/public/login");
        } else {
          console.error("Registration failed:", result.errors[0].message);
        }
      } catch (error) {
        console.error("Registration error:", error);
      }
    },
    [router]
  );

  const login = useCallback(
    async (email: string, password: string) => {
      const query = `
        mutation {
          loginUser(
            userEmail: ${JSON.stringify(email)},
            userPassword: ${JSON.stringify(password)}
          )
        }
      `;

      try {
        const response = await fetch("http://localhost:5000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();

        if (result.data) {
          const token = result.data.loginUser;
          const decoded: User = jwtDecode(token);
          localStorage.setItem("loggedin_user", JSON.stringify(decoded));
          localStorage.setItem("userToken", token);
          setLoggedInUserDetails(decoded);
          setIsAuthenticated(true);
          router.push("/auth/dashboard");
        } else {
          console.error("Login failed:", result.errors[0].message);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    [router]
  );

  const logout = () => {
    localStorage.clear();
    setLoggedInUserDetails(null);
    setIsAuthenticated(false);
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token: token as string,
        login,
        register,
        logout,
        loggedInUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
