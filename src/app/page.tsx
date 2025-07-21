"use client";

import DashboardPage from "./[pages]/(auth)/dashboard/page";
import { useAuth } from "@/context/auth_context";
import LoginPage from "./[pages]/(public)/login/page";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <DashboardPage /> : <LoginPage />;
}
