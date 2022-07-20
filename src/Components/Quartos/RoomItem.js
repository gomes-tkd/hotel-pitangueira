import React from 'react';
import styles from "./RoomItem.module.css";

const RoomItem = ({ photo, setPhoto }) => {
    function handleClick() {
        setPhoto(photo);
    }

    return (
        <li className={styles.teste} onClick={handleClick}>
            <img src={photo.src}  alt={photo.title} />
            <p>Categoria: {photo.categoria}</p>
        </li>
    );
};

export default RoomItem;