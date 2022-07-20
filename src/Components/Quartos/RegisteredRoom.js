import React, { useEffect, useState } from 'react';
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../Api";
import RoomItem from "./RoomItem";
import styles from "./RegisteredRoom.module.css";
import RoomModal from "./RoomModal";

const RegisteredRoom = () => {

    const { data, request } = useFetch();
    const [page, setPage] = useState(1);
    const [photo, setPhoto] = useState(false);

    useEffect (  () => {
        async function fetchPhoto() {
            const { url, options } = PHOTOS_GET({page, total: 9, user: 0});
            const { response, json } = await request(url, options);
        }

        fetchPhoto();

    }, [request, page]);

    if (data) {
        return (
            <>
                { photo && <RoomModal photo={ photo } setPhoto={setPhoto} /> }

                <ul className={styles.registredRoom}>
                    { data
                        .map(photo => (
                            <RoomItem
                                photo={ photo }
                                key={ photo.id }
                                setPhoto={setPhoto}
                            />
                        ))}
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
            </>
        );
    } else {
        return null;
    }
};

export default RegisteredRoom;