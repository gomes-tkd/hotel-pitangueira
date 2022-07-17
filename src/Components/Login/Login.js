import React from 'react';
import styles from "./Login.module.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import PaginaAindaNaoCriada from "../Helper/PaginaAindaNaoCriada";

const Login = () => {
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