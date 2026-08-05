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
        <section className="insurers-list">
            <header className="insurers-list__header">
                <h2>Trabajamos con las principales aseguradoras</h2>
            </header>

            <div className="insurers-list__track">
                {data.map((item) => (
                    <figure key={item.aseguradora_id} className="insurers-list__item">
                        <img src={item.photo} alt={item.photo_alt} />
                    </figure>
                ))}
            </div>
        </section>
    );
}

export default AseguradorasList;