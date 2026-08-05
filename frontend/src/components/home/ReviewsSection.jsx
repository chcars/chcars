import Loader from "../common/Loader";
import useFetch from "../../hooks/useFetch";
import { getReviews } from "../../services/reviewService";
import "./ReviewsSection.css";

function ReviewsSection() {
    const { data, loading, error } = useFetch(getReviews, 6);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>No se pudieron cargar las reseñas</p>;
    }

    if (!data) {
        return null;
    }

    return (
        <section className="reviews-section">
            <header className="reviews-section__header">
                <h2>Lo que dicen nuestros clientes</h2>
            </header>

            <div className="reviews-section__grid">
                {data.map((item) => (
                    <a
                        key={item.review_id}
                        className="reviews-section__card"
                        href={item.review_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong className="reviews-section__author">{item.author_name}</strong>
                        <span className="reviews-section__rating" aria-label={`${item.rating} estrellas`}>
                            {"★".repeat(Number(item.rating ?? 0))}
                        </span>
                        {item.description ? <p className="reviews-section__description">{item.description}</p> : null}
                    </a>
                ))}
            </div>
        </section>
    );
}

export default ReviewsSection;