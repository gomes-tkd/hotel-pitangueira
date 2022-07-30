import React, {useContext, useEffect, useState} from 'react';
import styles from "./RegisteredRoom.module.css";
import Input from "../Form/Input";
import { getRooms } from "../../Firebase";
import RoomDelete from "./RoomDelete";
import {Link} from "react-router-dom";
import { UserContext } from "../../UserContext";

const RegisteredRoom = () => {

    const { data } = useContext(UserContext);

    const [page, setPage] = useState(1);
    const [photo, setPhoto] = useState(false);
    const [busca, setBusca] = useState("");

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getRooms(setRooms);
    }, []);

    function handleBusca({ target }) {
        setBusca(target.value);
    }

    return (
        <section className={styles.qwe}>
            <Input
                label={"Por qual tipo de quarto desejas buscar?"}
                name={"busca"}
                value={busca}
                onChange={handleBusca}
            />
            <ul>
                <h1>Firebase</h1>
                {rooms
                    .filter(quarto => (
                        quarto.category
                            .toLowerCase()
                            .includes(busca.toLowerCase())
                    ))
                    .map(room => {
                        return (
                            <div key={room.id} className={styles.registredRoom}>
                                <li>{room.title}</li>
                                <li>{room.category}</li>
                                <li>{room.description}</li>
                                <li>{room.price}</li>
                                {data && <RoomDelete id={room.id}/>}
                                {data && <Link to={`/quarto/${room.id}/editar`}>Editar</Link>}
                            </div>
                        )})
                }
            </ul>
                <div className={styles.btns}>
                    {page > 1 ? (
                        <button onClick={() => setPage(page - 1)}> Anterior </button>
                    ) : (
                        <button disabled className={styles.btnDisabled}> Anterior </button>
                    )}
                    <p>{ page }</p>
                    <button onClick={() => setPage(page + 1)}> Próximo </button>
                </div>
        </section>
    );
};

export default RegisteredRoom;