import { createContext, useMemo, useState, useContext } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const disconnectUser = () => {
    setUser(null);
  };

  const userObj = useMemo(() => {
    return { user, setUser, disconnectUser };
  }, [user]);

  return (
    <UserContext.Provider value={userObj}>{children}</UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
