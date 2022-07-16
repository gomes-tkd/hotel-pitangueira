import React from 'react';
import styles from "./Input.module.css";

const Input = ({ label, type, name, value, onChange,}) => {
    return (
        <div className={styles.wrapper}>
            <label
                className={styles.label}
                htmlFor={name}
            >
                {label}
            </label>
            <input
                className={styles.input}
                id={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;