import React, {useState} from 'react';
import Button from "../Form/Button";
import styles from "./Login.module.css"
import Input from "../Form/Input";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    function handleUsuario({target}) {
        setUsuario(target.value);
    }

    function handleSenha({target}) {
        setSenha(target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(usuario + " " + senha);
    }

    return (
        <section className={styles.login}>
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
                    name={"usuario"}
                    value={usuario}
                    onChange={handleUsuario}
                    {...usuario}
                />
                <Input
                    label={"Senha"}
                    type={"password"}
                    name={"senha"}
                    value={senha}
                    onChange={handleSenha}
                    {...senha}
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
                <Button>
                    Cadastro
                </Button>
            </div>
        </section>
    );
};

export default Login;