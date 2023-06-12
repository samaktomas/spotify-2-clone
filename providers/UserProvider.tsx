"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProvidersProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProvidersProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
