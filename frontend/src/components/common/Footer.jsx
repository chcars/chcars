function Footer({ brand = 'CH Cars', description, links = [], copyright }) {
  return (
    <footer className="site-footer">
      <div>
        <strong className="site-footer__brand">{brand}</strong>
        {description ? <p className="site-footer__description">{description}</p> : null}
      </div>

      <nav className="site-footer__nav" aria-label="Pie de página">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <small className="site-footer__copyright">
        {copyright ?? `© ${new Date().getFullYear()} ${brand}`}
      </small>
    </footer>
  )
}

export default Footer