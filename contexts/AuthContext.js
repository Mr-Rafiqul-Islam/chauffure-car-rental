// contexts/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

// Create the context
const AuthContext = createContext(null);

// Create the provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // To handle initial load

  // Effect to check localStorage on initial component mount
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const storedUser = localStorage.getItem("authUser");

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse auth data from localStorage", error);
    } finally {
      setIsLoading(false); // Finished loading from storage
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    // NOTE: Replace '/api/login' with your actual API endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed. Please check your credentials.");
    }

    const data = await response.json();
    const { token: apiToken, user: apiUser } = data;

    // Update state
    setToken(apiToken);
    setUser(apiUser);

    // Store in localStorage for persistence
    localStorage.setItem("authToken", apiToken);
    localStorage.setItem("authUser", JSON.stringify(apiUser));
    
    toast.success(`Welcome back, ${apiUser.name}! 🎉`);
  };

  // Logout function
  const logout = () => {
    // Clear state
    setUser(null);
    setToken(null);

    // Remove from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    toast.success(`Logged out, see you next time! 👋`);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token, // Easily check if the user is logged in
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};