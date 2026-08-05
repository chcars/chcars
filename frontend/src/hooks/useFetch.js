import { useEffect, useState } from "react";

function useFetch(fetchFunction, params) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isActive = true;

        const loadData = async () => {
            try {
                setLoading(true);
                setError(null);

                const result = Array.isArray(params)
                    ? await fetchFunction(...params)
                    : params !== undefined
                        ? await fetchFunction(params)
                        : await fetchFunction();

                if (isActive) {
                    setData(result);
                }
            } catch (fetchError) {
                if (isActive) {
                    setError(fetchError);
                    setData(null);
                }
            } finally {
                if (isActive) {
                    setLoading(false);
                }
            }
        };

        loadData();

        return () => {
            isActive = false;
        };
    }, [fetchFunction, params]);

    return { data, loading, error };
}

export default useFetch;