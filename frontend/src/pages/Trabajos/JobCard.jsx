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

    return (
        <article className="job-card">
            <div className="job-card__comparison">
                <img className="job-card__after" src={photoAfter} alt={photoAfterAlt} />

                <div className="job-card__before-wrapper" style={{ width: `${sliderValue}%` }}>
                    <img className="job-card__before" src={photoBefore} alt={photoBeforeAlt} />
                </div>

                <div className="job-card__divider" style={{ left: `${sliderValue}%` }} />

                <input
                    className="job-card__range"
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(event) => setSliderValue(Number(event.target.value))}
                    aria-label={`Comparar antes y después de ${name}`}
                />

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