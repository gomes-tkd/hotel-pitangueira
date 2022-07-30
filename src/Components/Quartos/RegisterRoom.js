import React, {useState} from 'react';
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./RegisterRoom.module.css";
import { roomCollectionRef} from "../../Firebase";
import { addDoc } from "firebase/firestore";

const RegisterRoom = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);


    function handleSubmit(e) {
        e.preventDefault();

        async function createRoom() {
            const room = await addDoc(roomCollectionRef, {
                title,
                category,
                description,
                price
            });
        }

        createRoom();
    }

    return (
        <section className={styles.roomAdd}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input label={"Nome"} type={"text"} name={"title"} onChange={e => setTitle(e.target.value)} {...title}/>
                <Input label={"Categoria"} type={"text"} name={"category"} onChange={e => setCategory(e.target.value)}  {...category} />
                <Input label={"Descrição"} type={"text"} name={"description"} onChange={e => setDescription(e.target.value)}  {...description} />
                <Input label={"Valor"} type={"text"} name={"price"} onChange={e => setPrice(e.target.value)} {...price} />
                {/*
                <input
                    type="file"
                    className={styles.file}
                    onChange={e => setImgUrl(e.target.files[0])}
                />*/}
                <Button>Adicionar quarto</Button>
            </form>
        </section>
    );
};

export default RegisterRoom;