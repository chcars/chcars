import { useEffect } from "react";
import { getSettings } from "../../services/settingsService";

function LocalBusinessSchema() {
    useEffect(() => {
        let scriptTag = null;
        let isActive = true;

        const applySchema = async () => {
            try {
                const data = await getSettings();

                if (!isActive || !data) {
                    return;
                }

                const schemaData = {
                    "@context": "https://schema.org",
                    "@type": "AutoRepair",
                    name: data.business_name,
                    description: data.slogan,
                    telephone: data.phone,
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: data.address,
                        addressLocality: "Córdoba",
                        addressCountry: "AR"
                    },
                    geo: {
                        "@type": "GeoCoordinates",
                        latitude: data.latitude,
                        longitude: data.longitude
                    }
                };

                scriptTag = document.createElement("script");
                scriptTag.type = "application/ld+json";
                scriptTag.textContent = JSON.stringify(schemaData);
                document.head.appendChild(scriptTag);
            } catch (error) {
                console.error("Error loading local business schema:", error);
            }
        };

        applySchema();

        return () => {
            isActive = false;

            if (scriptTag && scriptTag.parentNode) {
                scriptTag.parentNode.removeChild(scriptTag);
            }
        };
    }, []);

    return null;
}

export default LocalBusinessSchema;
