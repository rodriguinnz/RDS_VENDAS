import { createContext, useContext, useState } from "react";
import { isLogged, getUser } from "../lib/AuthHandler";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialLoggedState = isLogged();
    const initalUserState = initialLoggedState ? getUser() : null;

    const [logged, setLogged] = useState(initialLoggedState);
    const [user, setUser] = useState(initalUserState);

    return (
        <AuthContext.Provider value={{ logged, setLogged, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);