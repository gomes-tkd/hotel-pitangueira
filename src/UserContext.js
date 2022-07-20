import { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from "./Api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const tokenResponse = await fetch(url, options);
        const json = await  tokenResponse.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({ username, password });
        const tokenResponse = await fetch(url, options);
        const json = await tokenResponse.json();
        window.localStorage.setItem("token", json.token);

        await getUser(json.token);
        navigate("/conta");
    }

    async function userLogout() {
        setData(null);
        setError(null);
        setLogin(false);
        setLoading(false);
        window.localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data }}>
            { children }
        </UserContext.Provider>
    );
};

