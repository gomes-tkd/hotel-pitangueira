import {useContext, useEffect} from 'react';
import styles from "./RoomModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../Api";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import RoomDelete from "./RoomDelete";

const RoomModal = ({ photo, setPhoto }) => {
    const { data, error, loading, request } = useFetch();
    const user = useContext(UserContext);


    console.log(photo);
    useEffect(() => {
        const {url, options} = PHOTO_GET(photo.id);
        request(url, options);
    }, [photo, request]);

    function handleOutSideClick(e) {
        if (e.currentTarget !== e.target) {
            setPhoto(null);
        }
    }

    console.log({photo})

    return (
        <div onClick={handleOutSideClick}>
            {data && (
                <div className={styles.modal}>
                    <div className={styles.foto}>
                        <div className={styles.img}>
                            <img src={photo.src} alt={photo.title} />
                        </div>
                        <div className={styles.detalhes}>
                            {user.data && user.data.username === photo.author ? <RoomDelete id={photo.id} /> : ""}
                            <h1 className={styles.quartoNome}>
                                <Link to={`/foto/${photo.id}`}>
                                    {photo.title}
                                </Link>
                            </h1>
                            <h2>Detalhes</h2>
                            <ul className={styles.atributos}>
                                <li>Categoria: {photo.categoria}</li>
                                <li>Descrição: {photo.CONTENT}</li>
                                <li>Valor: {photo.valor}</li>
                                <li>Visualizações: {photo.acessos}</li>
                            </ul>
                            <h2>Serviços ofertados</h2>
                            <div className={styles.servicos}>
                                <p>Lavanderia</p>
                                <p>Telefone</p>
                                <p>Frigobar</p>
                                <p>Restaurante</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomModal;