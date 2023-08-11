import { Children, createContext, useEffect, useState } from "react";
import { api } from "../services/api"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);

    useEffect(() => {
        // Verify if the user are logged in
        const isLoadingStore = async () => {
            const storageUser = localStorage.getItem("@Auth:user")
            const storageToken = localStorage.getItem("@Auth:token")

            if (storageUser && storageToken) {
                setUser(storageUser)
            }
        };
        isLoadingStore();
    }, [])


    // Authenticates the user
    const signIn = async ({email, password}) => {
        
        const response = await api.post("/auth", { email, password })
        console.log(response);

        if (response.status !== 200) {
            return response.data.error
        } else {
            setUser(response.data.user);
            api.defaults.headers.common[
                "Autorization"

            ] = `Bearer ${response.data.token}`;
            localStorage.setItem("@Auth:token", response.data.token);
            localStorage.setItem("@Auth:user", response.data.user);
        }
    }

    return (
        // Provide the data within the application
        <AuthContext.Provider value={{
            user, signed: !!user,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}