import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("current_user"));
        if(data) {
            setUser(data);
        }
    }, []);

    const logOut = () => {
        setUser(null);
        localStorage.removeItem("current_user");
    }

    return (
        <AuthContext.Provider value={{user, setUser, logOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);