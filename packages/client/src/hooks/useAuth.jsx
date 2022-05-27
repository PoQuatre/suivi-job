import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  user: null,
  isLoading: true,
  connect: (_user) => {},
  disconnect: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const connect = (user) => setUser(user);
  const disconnect = () => setUser(null);

  useEffect(() => {
    fetch('/auth/me')
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        if (res.success) {
          connect(res.user);
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, connect, disconnect }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
