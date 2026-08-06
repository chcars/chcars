import Loader from "../../components/common/Loader";
import useFetch from "../../hooks/useFetch";
import { getAboutUs } from "../../services/aboutService";
import "./Nosotros.css";

function Nosotros() {
    const { data, loading, error } = useFetch(getAboutUs);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>No se pudo cargar la información</p>;
    }

    if (!data) {
        return null;
    }

    return (
        <section className="nosotros-page">
            <div className="nosotros-page__media">
                <img src={data.photo} alt={data.photo_alt} />
            </div>

            <div className="nosotros-page__content">
                <div className="nosotros-page__badge">
                    <span className="nosotros-page__badge-line" />
                    <span className="nosotros-page__badge-text">NOSOTROS</span>
                </div>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        </section>
    );
}

export default Nosotros;
