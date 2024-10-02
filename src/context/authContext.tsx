"use client";
import { createContext, useEffect, useState } from "react";
import {
  AuthPrividerProps,
  IAuthContext,
  UserSession,
} from "@/interfaces/context";

export const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: AuthPrividerProps) => {
  const [user, setUser] = useState<UserSession | null>(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify({ user }));
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUser = localStorage.getItem("user");
      setUser(JSON.parse(storedUser!)?.user);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
