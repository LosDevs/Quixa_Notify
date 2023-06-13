import React, { createContext, useState, ReactNode } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  loginAC: () => {},
  logout: () => {}
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginAC = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginAC, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
