import { AuthContextType, CallDetails, User } from "@/interfaces/Dashboard";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const [callDetails, setCallDetails] = useState<CallDetails[]>([])

  const login = (userData: User) => {
    setUser(userData);
    // localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    // localStorage.removeItem("user");
  };

  const updateCallDetails = (callArray: CallDetails[]) => {
    setCallDetails(callArray)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, callDetails, updateCallDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context == null) {
    throw new Error('User must be logged In')
  }
  return context
};
