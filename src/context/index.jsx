import React, { createContext, useState, memo, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalSrorage";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const AppProvider = (props) => {
    const [user, setUser] = useLocalStorage("users", null);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
            navigate("/admin", { replace: true });
    };


    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };

    return (
        <AppContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default memo(AppProvider);