import React, {useContext} from 'react';
import { NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import {UserContext} from "../UserContext";

const Header = () => {
    const { data } = useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to={"/"} end className={styles.logo}>Home</NavLink>
                <div className={styles.informacoes}>
                    <NavLink to={"informacoes"} className={styles.info}>Informações</NavLink>
                    <NavLink to={"servicos"} className={styles.info}>Serviços</NavLink>
                    <NavLink to={"contato"} className={styles.info}>Contato</NavLink>
                    {data ? (
                        <NavLink to={"conta"} className={styles.info}>
                            {data.nome}
                        </NavLink>
                    ) : (
                        <NavLink to={"login"} className={styles.info}>Login</NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;