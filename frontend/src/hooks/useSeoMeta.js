import { useEffect } from "react";
import { getSeoMeta } from "../services/seoMetaService";

function useSeoMeta(page) {
    useEffect(() => {
        if (!page) {
            return;
        }

        let isActive = true;

        const applySeoMeta = async () => {
            try {
                const data = await getSeoMeta(page);

                if (!isActive || !data) {
                    return;
                }

                if (data.meta_title) {
                    document.title = data.meta_title;
                }

                let descriptionTag = document.querySelector('meta[name="description"]');

                if (!descriptionTag) {
                    descriptionTag = document.createElement("meta");
                    descriptionTag.setAttribute("name", "description");
                    document.head.appendChild(descriptionTag);
                }

                descriptionTag.setAttribute("content", data.meta_description ?? "");
            } catch (error) {
                console.error("Error loading SEO metadata:", error);
            }
        };

        applySeoMeta();

        return () => {
            isActive = false;
        };
    }, [page]);
}

export default useSeoMeta;
