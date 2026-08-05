function ServiceCard({ title, description, icon, href }) {
  const content = (
    <article className="service-card">
      {icon ? <span className="service-card__icon">{icon}</span> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
    </article>
  )

  return href ? <a href={href}>{content}</a> : content
}

export default ServiceCard