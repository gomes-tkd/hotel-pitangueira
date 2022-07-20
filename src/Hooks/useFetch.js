import { useCallback, useState } from 'react';

const UseFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const request = useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();

            if (response.ok === false) {
                json = null;
                throw new Error(json.message);
            }

        } catch (e) {
            setError("Dados incompletos seu imundícia... vai dormir ohhhh seu JAGUARA...");
        } finally {
            setData(json);
            setLoading(false);
            return {
                response,
                json,
            };
        }

    }, []);

    return {
        data,
        loading,
        error,
        request
    };
};

export default UseFetch;