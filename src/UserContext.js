import {createContext, useState} from 'react';
import {TOKEN_POST, USER_GET} from "./Api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const tokenResponse = await fetch(url, options);
        const json = await  tokenResponse.json();
        setData(json);
        setLogin(true);
        console.log(json);
    }

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({ username, password });
        const tokenResponse = await fetch(url, options);
        const json = await tokenResponse.json();
        window.localStorage.setItem("token", json.token);

        getUser(json.token);
    }

    return (
        <UserContext.Provider value={{ userLogin, data }}>
            { children }
        </UserContext.Provider>
    );
};

