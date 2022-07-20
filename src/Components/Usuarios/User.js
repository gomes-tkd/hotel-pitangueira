import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./User.module.css";

const User = () => {
    const { data, userLogout } = useContext(UserContext);

    return (
        <section className={`container ${styles.user}`}>
            <h1>Perfil teste - simulando gerente</h1>

            <div className={styles.perfil}>
                <p>Nome: {data.nome}</p>
                <p>Perfil: gerente</p>
                <p>Email: {data.email}</p>
            </div>

            <div className={styles.permissoes}>
                <h2>Permissões</h2>
                <NavLink to={"/quarto/cadastro"}>Adicionar quarto</NavLink>
                <NavLink to={"/quarto/cadastrados"}>Visualizar quartos</NavLink>
            </div>

            <button onClick={userLogout}>Sair</button>
        </section>
    );
};

export default User;