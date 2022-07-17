import React, {useContext, useEffect, useState} from 'react';
import styles from "./Login.module.css";
import stylesBtn from "../Form/Button.module.css";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginForm = () => {

    const username = useForm();
    const password = useForm();

    const { userLogin } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }

    return (
            <section>
                <h1 className={styles.title}>
                    Login administrativo
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className={`${styles.forms}`}
                >
                    <Input
                        label={"Usuário"}
                        type={"text"}
                        name={"username"}
                        {...username}
                    />
                    <Input
                        label={"Senha"}
                        type={"password"}
                        name={"password"}
                        {...password}
                    />
                    <Button>
                        Entrar
                    </Button>
                </form>
                <div className={styles.cadastro}>
                    <p
                        className={styles.paragrafo}
                    >
                        Cadastrar novo usuário
                    </p>
                    <Link className={stylesBtn.button} to={"/login/criar"} >
                        Cadastro
                    </Link>
                </div>
            </section>
    );
};

export default LoginForm;