function JobCard({ title, description, location, salary, type, applyHref }) {
  return (
    <article className="job-card">
      <div className="job-card__body">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>

      <dl className="job-card__meta">
        {type ? (
          <div>
            <dt>Modalidad</dt>
            <dd>{type}</dd>
          </div>
        ) : null}
        {location ? (
          <div>
            <dt>Ubicación</dt>
            <dd>{location}</dd>
          </div>
        ) : null}
        {salary ? (
          <div>
            <dt>Salario</dt>
            <dd>{salary}</dd>
          </div>
        ) : null}
      </dl>

      {applyHref ? (
        <a className="job-card__link" href={applyHref}>
          Postularme
        </a>
      ) : null}
    </article>
  )
}

export default JobCard