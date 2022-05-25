import { createContext, useContext, useState } from 'react';

const UserContext = createContext({
  authState: { connected: false, user: null },
  connect: (_user) => {},
  disconnect: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ connected: false, user: null });

  const connect = (user) => setAuthState({ connected: true, user });
  const disconnect = () => setAuthState({ connected: false, user: null });

  return (
    <UserContext.Provider value={{ authState, connect, disconnect }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
