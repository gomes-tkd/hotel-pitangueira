import React, { useEffect, useState } from 'react';
import styles from "./RegisterRoom.module.css";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { updateRoom, db } from "../../Firebase";
import {useParams} from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";


const EditRoom = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const { id } = useParams();

    const docRef = doc(db, "quartos", id);

    useEffect(() => {
        async function getData() {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setTitle(docSnap.data().title);
                setCategory(docSnap.data().category);
                setDescription(docSnap.data().description);
                setPrice(docSnap.data().price);
            } else {
                return null;
            }
        }

        getData();
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();

        updateRoom(id, title, category, description, price);
    }


    return (
        <section>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input label={"Nome"} type={"text"} name={"newTitle"} onChange={e => setTitle(e.target.value)} value={title}/>
                <Input label={"Categoria"} type={"text"} name={"newCategory"} onChange={e => setCategory(e.target.value)} value={category}/>
                <Input label={"Descrição"} type={"text"} value={description} name={"newDescription"} onChange={e => setDescription(e.target.value)}  />
                <Input label={"Valor"} type={"text"} name={"newPrice"} value={price} onChange={e => setPrice(e.target.value)} />
                <Button>Editar quarto</Button>
            </form>
        </section>
    );
};

export default EditRoom;