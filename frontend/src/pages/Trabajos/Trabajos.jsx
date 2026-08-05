import Loader from "../../components/common/Loader";
import useFetch from "../../hooks/useFetch";
import { getJobs } from "../../services/jobService";
import JobCard from "./JobCard";
import "./Trabajos.css";

function Trabajos() {
    const { data, loading, error } = useFetch(getJobs);

    return (
        <section className="trabajos-page">
            <header className="trabajos-page__header">
                <h1>Nuestros Trabajos</h1>
            </header>

            {loading ? <Loader /> : null}

            {error ? <p>No se pudieron cargar los trabajos</p> : null}

            {!loading && !error && Array.isArray(data) && data.length === 0 ? (
                <p>No hay trabajos todavía</p>
            ) : null}

            {!loading && !error && Array.isArray(data) && data.length > 0 ? (
                <div className="trabajos-page__grid">
                    {data.map((item) => (
                        <JobCard
                            key={item.job_id}
                            name={item.name}
                            description={item.description}
                            photoBefore={item.photo_before}
                            photoBeforeAlt={item.photo_before_alt}
                            photoAfter={item.photo_after}
                            photoAfterAlt={item.photo_after_alt}
                            category={item.category}
                            vehicle={item.vehicule}
                        />
                    ))}
                </div>
            ) : null}
        </section>
    );
}

export default Trabajos;
