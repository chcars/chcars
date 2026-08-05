import { useState } from "react";
import "./JobCard.css";

function JobCard({
    name,
    description,
    photoBefore,
    photoBeforeAlt,
    photoAfter,
    photoAfterAlt,
    category,
    vehicle
}) {
    const [sliderValue, setSliderValue] = useState(50);
    const [hoveredSide, setHoveredSide] = useState(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const dividerX = (sliderValue / 100) * rect.width;
        setHoveredSide(x < dividerX ? "before" : "after");
    };

    const handleMouseLeave = () => setHoveredSide(null);

    return (
        <article className="job-card">
            <div
                className={`job-card__comparison ${hoveredSide ? `hover-${hoveredSide}` : ""}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img className="job-card__after" src={photoAfter} alt={photoAfterAlt} />

                <div className="job-card__before-wrapper" style={{ width: `${sliderValue}%` }}>
                    <img className="job-card__before" src={photoBefore} alt={photoBeforeAlt} />
                </div>

                <div className="job-card__divider" style={{ left: `${sliderValue}%` }}>
                    <div className="job-card__knob" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10 8 L6 12 L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 8 L18 12 L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <input
                    className="job-card__range"
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(event) => setSliderValue(Number(event.target.value))}
                    aria-label={`Comparar antes y después de ${name}`}
                />

                <div className={`job-card__label job-card__label--before ${hoveredSide === "before" ? "visible" : ""}`}>Antes</div>
                <div className={`job-card__label job-card__label--after ${hoveredSide === "after" ? "visible" : ""}`}>Después</div>

                {category ? <span className="job-card__badge">{category}</span> : null}
            </div>

            <div className="job-card__body">
                <h3>{name}</h3>
                {vehicle ? <p className="job-card__vehicle">{vehicle}</p> : null}
                {description ? <p className="job-card__description">{description}</p> : null}
            </div>
        </article>
    );
}

export default JobCard;