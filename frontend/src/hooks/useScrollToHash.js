import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            const elementId = hash.replace("#", "");
            const element = document.getElementById(elementId);

            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [hash]);
}

export default useScrollToHash;