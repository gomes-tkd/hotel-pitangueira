import { useState } from 'react';

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,
        message: "Preencha um email válido",
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z]{8,}$/,
        message: "A senha precisa ter 1 character maiúsculo, 1 minúsculo e 1 digito.",
    },
};

const UseForm = (type) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);


    function validate(value) {
        if (type === false) {
            return true
        };

        if (value.length === 0) {
            return setError("Preencha um valor.");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }) {
        if (error) {
            validate(target.value);
        }

        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
};

export default UseForm;