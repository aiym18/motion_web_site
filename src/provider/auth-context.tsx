"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  user: any; // Можешь заменить `any` на конкретный тип пользователя
  isLoggingIn: boolean;
  login: () => void;
  logout: () => void;
  setUser: (user: any) => void; // Заменить `any` на конкретный тип
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
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

  return (
    <AuthContext.Provider value={{ user, isLoggingIn, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
