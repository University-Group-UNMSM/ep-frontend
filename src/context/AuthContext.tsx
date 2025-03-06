'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';
import { loginUser, registerUser } from '@/services/authService';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string, phone: string, type: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) setToken(storedToken);
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    setToken(data.token);
    localStorage.setItem('token', data.token);
  };

  const register = async (name: string, email: string, password: string, phone: string, type: string) => {
    await registerUser(name, email, password, phone, type);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    router.push('/login');
  };

  return <AuthContext.Provider value={{ token, login, logout, register }}>{children}</AuthContext.Provider>;
};
