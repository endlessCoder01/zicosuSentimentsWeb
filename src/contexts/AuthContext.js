import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('activeUser');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUser(parsed.token.userDetails.user);
        setToken(parsed.token.token);
      } catch (err) {
        console.error('Failed to parse auth:', err);
        localStorage.clear();
      }
    }
    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('activeUser', JSON.stringify({
      token: {
        userDetails: { user: userData },
        token: authToken
      }
    }));
    setError(null);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('activeUser');
  };

  const value = {
    user,
    token,
    loading,
    error,
    setError,
    login,
    logout,
    isAuthenticated: !!token
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
