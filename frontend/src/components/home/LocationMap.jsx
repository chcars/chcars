import { MapPin, Clock, Phone } from "lucide-react";
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
            <header className="location-map__header">
                <div className="location-map__badge">
                    <span className="location-map__badge-line" />
                    <span className="location-map__badge-text">UBICACIÓN</span>
                </div>
                <h2>Encontranos en Córdoba</h2>
                <p>Visitanos o coordiná tu turno, estamos para ayudarte.</p>
            </header>

            <div className="location-map__grid">
                <div className="location-map__info">
                    {data.address ? (
                        <div className="location-map__item">
                            <MapPin className="location-map__icon" size={20} />
                            <div>
                                <span className="location-map__label">Dirección</span>
                                <p>{data.address}</p>
                            </div>
                        </div>
                    ) : null}

                    {data.opening_hours ? (
                        <div className="location-map__item">
                            <Clock className="location-map__icon" size={20} />
                            <div>
                                <span className="location-map__label">Horario</span>
                                <p>{data.opening_hours}</p>
                            </div>
                        </div>
                    ) : null}

                    {data.phone ? (
                        <div className="location-map__item">
                            <Phone className="location-map__icon" size={20} />
                            <div>
                                <span className="location-map__label">Teléfono</span>
                                <p>{data.phone}</p>
                            </div>
                        </div>
                    ) : null}

                    {data.google_maps_url ? (
                        <a
                            className="location-map__link"
                            href={data.google_maps_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver en Google Maps →
                        </a>
                    ) : null}
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
                </div>
            </div>
        </section>
    );
}

export default LocationMap;
