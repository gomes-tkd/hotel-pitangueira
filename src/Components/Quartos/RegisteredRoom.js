import React, {useContext, useEffect, useState} from 'react';
import styles from "./RegisteredRoom.module.css";
import Input from "../Form/Input";
import { getRooms } from "../../Firebase";
import RoomDelete from "./RoomDelete";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import CalendarRent from "../CalendarRent/CalendarRent";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

const RegisteredRoom = () => {

    const { data } = useContext(UserContext);

    const [page, setPage] = useState(1);
    const [photo, setPhoto] = useState(false);
    const [busca, setBusca] = useState("");
    const [rooms, setRooms] = useState([]);

    const [startRent, setStartRent] = useState(null);
    const [endRent, setEndRent] = useState(null)

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

            <div>
                <CalendarRent
                    start={startRent}
                    setStart={setStartRent}
                    end={endRent}
                    setEnd={setEndRent}
                />
            </div>

            <ul>
                <h1>Quartos</h1>
                {rooms
                    .filter(quarto => (
                        quarto.category
                            .toLowerCase()
                            .includes(busca.toLowerCase())
                    ))
                    .map(room => {
                        return (
                            <div key={room.id} className={styles.registeredRoom}>
                                <li>{room.title}</li>
                                <li>{room.category}</li>
                                <li>{room.description}</li>
                                <li>{room.price}</li>
                                <button>Realizar reserva</button>
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

/*
*
*
            <div>
                <h2>Informe as datas</h2>
                <Calendar value={start} onChange={(start) => setStart(start)}/>
                <Calendar value={end} onChange={(end) => setEnd(end)}/>
            </div>
*
                <DateRangePickerComponent
                    placeholder={"Informe as datas"}
                    startDate={startRent}
                    endDate={endRent}
                    min={minDate}
                    minDays={1}
                    format="dd-MM-yyyy"
                    onChange={(startRent, endRent) => setRent(startRent.value, endRent.value)}
                ></DateRangePickerComponent>
* */