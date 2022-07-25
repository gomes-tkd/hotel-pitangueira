import React, {useState} from 'react';
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./RegisterRoom.module.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import {PHOTO_POST} from "../../Api";

const RegisterRoom = () => {

    const nome = useForm();
    const categoria = useForm();
    const descricao = useForm();
    const valor = useForm();
    const [img, setImg] = useState({});

    const { data, error, loading, request } = useFetch();


    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("img", img.raw);
        formData.append("nome", nome.value);
        formData.append("categoria", categoria.value);
        formData.append("descricao", descricao.value);
        formData.append("valor", valor.value);

       const token = window.localStorage.getItem("token");

        const { url, options } = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImg({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }

    return (
        <section className={styles.roomAdd}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input label={"Nome"} type={"text"} name={"nome"} {...nome}/>
                <Input label={"Categoria"} type={"text"} name={"categoria"} {...categoria} />
                <Input label={"Descrição"} type={"text"} name={"descricao"} {...descricao} />
                <Input label={"Valor"} type={"text"} name={"valor"} {...valor} />
                <input type="file" className={styles.file} name={"img"} id={"img"} onChange={handleImg}/>
                <Button>Adicionar quarto</Button>
            </form>
            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{backgroundImage: `url('${img.preview}')`}}
                    ></div>
                )}
            </div>
            {data && <p>Quarto cadastrado com sucesso!!!</p> }
        </section>
    );
};

export default RegisterRoom;