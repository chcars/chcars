import Loader from "../common/Loader";
import useFetch from "../../hooks/useFetch";
import { getAseguradoras } from "../../services/aseguradorasService";
import "./AseguradorasList.css";

function AseguradorasList() {
    const { data, loading, error } = useFetch(getAseguradoras);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>No se pudieron cargar las aseguradoras</p>;
    }

    if (!data) {
        return null;
    }

    return (
    <section className="insurers-list" id="aseguradoras">
        <header className="insurers-list__header">
            <div className="insurers-list__badge">
                <span className="insurers-list__badge-line"></span>
                <span className="insurers-list__badge-text">ASEGURADORAS</span>
            </div>

            <h2>Trabajamos con las principales compañías de seguros</h2>

            <p>
                Gestionamos el trámite directamente con tu aseguradora para que
                no tengas que preocuparte por nada.
            </p>
        </header>

        <div className="insurers-list__slider">
            <div className="insurers-list__track">

                {[...data, ...data].map((item, index) => (
                    <figure
                        key={`${item.aseguradora_id}-${index}`}
                        className="insurers-list__item"
                    >
                        <img
                            src={item.photo}
                            alt={item.photo_alt}
                        />
                    </figure>
                ))}

            </div>
        </div>
    </section>
);
}

export default AseguradorasList;