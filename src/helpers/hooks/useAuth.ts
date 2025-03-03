"use client";
import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = () => setIsLoggingIn(true);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsLoggingIn(false);
  };

  return { user, isLoggingIn, login, logout, setUser };
}
