import * as React from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthContextType } from '../types';
import { DEFAULT_USERS } from '../constants';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [users, setUsers] = useState<User[]>(DEFAULT_USERS);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signIn = (email: string, password: string): boolean => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const signUp = (name: string, email: string, password: string): boolean => {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return false;
    }
    const newUser: User = { name, email, password };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    return true;
  };

  const signOut = () => {
    setCurrentUser(null);
  };

  const value: AuthContextType = {
    users,
    currentUser,
    isAuthenticated: !!currentUser,
    signIn,
    signUp,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
