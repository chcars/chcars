import Loader from "../common/Loader";
import useFetch from "../../hooks/useFetch";
import { getSettings } from "../../services/settingsService";
import "./LocationMap.css";

function LocationMap() {
    const { data, loading, error } = useFetch(getSettings);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>No se pudo cargar la ubicación</p>;
    }

    if (!data) {
        return null;
    }

    const mapSrc = `https://www.google.com/maps?q=${data.latitude},${data.longitude}&z=15&output=embed`;

    return (
        <section className="location-map">
            <div className="location-map__content">
                <h2>Encontranos</h2>
                {data.address ? <p><strong>Dirección:</strong> {data.address}</p> : null}
                {data.opening_hours ? <p><strong>Horario:</strong> {data.opening_hours}</p> : null}
                {data.phone ? <p><strong>Teléfono:</strong> {data.phone}</p> : null}
            </div>

            <div className="location-map__map">
                <iframe
                    title={`Ubicación de ${data.business_name ?? "CH Cars"}`}
                    src={mapSrc}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />

                {data.google_maps_url ? (
                    <a
                        className="location-map__link"
                        href={data.google_maps_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver en Google Maps
                    </a>
                ) : null}
            </div>
        </section>
    );
}

export default LocationMap;