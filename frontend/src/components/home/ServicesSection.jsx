import Loader from "../common/Loader";
import useFetch from "../../hooks/useFetch";
import { getServices } from "../../services/serviceService";
import "./ServicesSection.css";

function ServicesSection() {
    const { data, loading, error } = useFetch(getServices);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>No se pudieron cargar los servicios</p>;
    }

    if (!data) {
        return null;
    }

    const services = [...data].sort((firstService, secondService) => {
        return Number(firstService.display_order ?? 0) - Number(secondService.display_order ?? 0);
    });

    return (
        <section className="services-section">
            <header className="services-section__header">

                <div className="services-section__badge">
                    <span className="services-section__badge-line"></span>
                    <span className="services-section__badge-text">
                        SERVICIOS
                    </span>
                </div>
                
                <h2>
                    Todo lo que tu vehículo necesita
                </h2>
                
                <p>
                    Soluciones integrales de chapa, pintura y estética automotriz
                    con materiales de primera calidad y atención personalizada.
                </p>
                
            </header>

            <div className="services-section__grid">
                {services.map((item) => (
                    <article key={item.service_id} className="services-section__card">
                    
                        <div className="services-section__image-wrapper">
                                
                            <img
                                className="services-section__image"
                                src={item.photo}
                                alt={item.photo_alt}
                            />
                
                            <div className="services-section__overlay">
                                
                                <h3 className="services-section__title">
                                    {item.name}
                                </h3>
                                
                            </div>
                                
                        </div>
                                
                        <div className="services-section__body">
                                
                            {item.description ? (
                                <p className="services-section__description">
                                    {item.description}
                                </p>
                            ) : null}
                
                        </div>
                        
                    </article>
))}
            </div>
        </section>
    );
}

export default ServicesSection;