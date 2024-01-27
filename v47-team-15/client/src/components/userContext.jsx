import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <UserContext.Provider value={{ username, setUsername, successMessage, setSuccessMessage }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };