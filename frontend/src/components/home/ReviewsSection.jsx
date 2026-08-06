import { Star, Quote } from "lucide-react";
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
                <div className="reviews-section__badge">
                    <span className="reviews-section__badge-line" />
                    <span className="reviews-section__badge-text">RESEÑAS</span>
                </div>
                <h2>Lo que dicen nuestros clientes</h2>
                <p>Opiniones reales de Google de quienes ya confiaron en nosotros.</p>
            </header>

            <div className="reviews-section__grid">
                {data.map((item) => {
                    const rating = Number(item.rating ?? 0);

                    return (
                        <a
                            key={item.review_id}
                            className="reviews-section__card"
                            href={item.review_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Quote className="reviews-section__quote-icon" size={28} />

                            <div className="reviews-section__rating" aria-label={`${rating} estrellas`}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="reviews-section__star"
                                        fill={i < rating ? "var(--color-orange)" : "none"}
                                        stroke="var(--color-orange)"
                                    />
                                ))}
                            </div>

                            {item.description ? (
                                <p className="reviews-section__description">{item.description}</p>
                            ) : null}

                            <strong className="reviews-section__author">{item.author_name}</strong>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export default ReviewsSection;
