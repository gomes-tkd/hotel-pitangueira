import React, {useEffect} from 'react';
import styles from "./RoomDelete.css";
import { PHOTO_DELETE } from "../../Api";
import useFetch from "../../Hooks/useFetch";

const RoomDelete = ({ id }) => {

    const { request } = useFetch();

    async function handleClick() {
        const confirm = window.confirm("Tens certeza que deseja deletar a foto?");
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);
            if (response.ok) {
                window.location.reload();
            }
        }
    }

    return (
        <div className={styles.deletar}>
            <button
                onClick={handleClick}
            >
                Deletar
            </button>
        </div>
    );
};

export default RoomDelete;