import React from "react";
import { ThemeToggle } from "../UI/ThemeToggle";

export const AppLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 transition-colors duration-300">
    <ThemeToggle />
    {children}
  </div>
);
