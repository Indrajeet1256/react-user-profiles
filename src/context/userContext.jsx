import { createContext, useContext, useState } from "react";
import useApi from "../hooks/useApi";

const UserContext = createContext(undefined);

export function useUserContext() {
	return useContext(UserContext);
}

export default function Provider({ children }) {
	const [loggedUser, setLoggedUser] = useState(null);
	const { users, loading, error } = useApi();

	const handleSetLoggedUser = (user) => setLoggedUser(user);

	const data = { users, loading, error, loggedUser, handleSetLoggedUser };
	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
