import React, {useContext} from 'react';
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./Login.module.css";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../Api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";

const LoginCreate = () => {

    const username = useForm();
    const email = useForm("email");
    const password = useForm("password");

    const { userLogin } = useContext(UserContext);
    const { loading, error, request } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });

        const { response } = await request(url, options);

        if (response.ok) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section>
            <h1 className={styles.title}>
                Cadastro Administrativo
            </h1>
            <form onSubmit={handleSubmit}>
                <Input label={"Usuário"} type="text" name={"username"} {...username} />
                <Input label={"Email"} type={"email"} name={"email"} {...email} />
                <Input label={"Senha"} type="password" name={"password"} {...password} />
                { loading ? (

                    <Button disabled>
                        Cadastrando...
                    </Button>
                ) : (
                    <Button>
                        Cadastrar
                    </Button>
                )}
                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginCreate;