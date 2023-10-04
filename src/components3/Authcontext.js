// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Implement your login logic here
    // Example: setUser(userData);
  };

  const register = (userData) => {
    // Implement your registration logic here
    // Example: setUser(userData);
  };

  const logout = () => {
    // Implement logout logic here
    // Example: setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
