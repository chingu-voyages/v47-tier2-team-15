import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [userId, setUserId] = useState('');

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        successMessage,
        setSuccessMessage,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
