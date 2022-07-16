import React from 'react';
import { NavLink} from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to={"/"} end className={styles.logo}>Home</NavLink>
                <div className={styles.informacoes}>
                    <NavLink to={"informacoes"} className={styles.info}>Informações</NavLink>
                    <NavLink to={"servicos"} className={styles.info}>Serviços</NavLink>
                    <NavLink to={"contato"} className={styles.info}>Contato</NavLink>
                    <NavLink to={"login"} className={styles.info}>Login</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;