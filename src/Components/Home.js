import { Link } from "react-router-dom";
import React from 'react';
import styles from "./Home.module.css";

const Home = () => {
    return (
        <main className={"mainContainer"}>
            <section className={`${styles.homeContainer}`}>
                <div className={styles.title}>
                    <h1 className={styles.subtitle}>Hotel</h1>
                    <h1>Pitangueira</h1>
                </div>
                <div className={styles.sobre}>
                    <p>
                        Nosso hotel conta com três tipos de acomodações prontas para te receber junto com sua família.
                    </p>
                    <Link className={styles.aButton} to={"quartos"}>Quartos</Link>
                </div>
            </section>
        </main>
    );
};

export default Home;