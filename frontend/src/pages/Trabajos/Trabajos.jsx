import Loader from "../../components/common/Loader";
import useFetch from "../../hooks/useFetch";
import { getJobs } from "../../services/jobService";
import JobCard from "./JobCard";
import "./Trabajos.css";
import { useEffect, useState } from "react";

function Trabajos() {
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);

    const { data, loading, error } = useFetch(getJobs, category ? category : undefined);

    useEffect(() => {
        let isActive = true;

        const loadCategories = async () => {
            try {
                const all = await getJobs();
                if (!isActive || !Array.isArray(all)) return;

                const uniq = Array.from(new Set(all.map((j) => j.category).filter(Boolean)));
                setCategories(uniq);
            } catch (err) {
                // ignore
            }
        };

        loadCategories();

        return () => {
            isActive = false;
        };
    }, []);

    return (
        <section className="trabajos-page">
            <header className="trabajos-page__header">
                <h1>Nuestros Trabajos</h1>
                <p className="trabajos-page__subtitle">
                    Mirá la transformación real de cada vehículo que pasó por nuestro taller.
                </p>
            </header>

            <p className="trabajos-page__hint">Deslizá y comparé el antes y después de cada trabajo.</p>

            <div className="trabajos-page__controls">
                <span className="trabajos-page__filter-label">Filtrar por categoría:</span>
                <div className="trabajos-page__filters">
                    <button
                        type="button"
                        className={`trabajos-page__filter ${category === "" ? "is-active" : ""}`}
                        onClick={() => setCategory("")}
                    >
                        Todas
                    </button>
                    {categories.map((c) => (
                        <button
                            key={c}
                            type="button"
                            className={`trabajos-page__filter ${category === c ? "is-active" : ""}`}
                            onClick={() => setCategory(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

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

