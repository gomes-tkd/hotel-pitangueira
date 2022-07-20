import React, {useContext} from 'react';
import styles from "./Login.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import PaginaAindaNaoCriada from "../Helper/PaginaAindaNaoCriada";
import {UserContext} from "../../UserContext";

const Login = () => {

    const { login } = useContext(UserContext);

    if (login === true) {
        <Navigate to={"/conta"} />
    }

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path={"/"} element={<LoginForm />} />
                    <Route path={"criar"} element={<LoginCreate />} />
                    <Route path={"*"} element={<PaginaAindaNaoCriada />} />
                </Routes>
            </div>
        </section>
    );
};

export default Login;