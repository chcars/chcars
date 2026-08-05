import { Link } from "react-router-dom";
import Button from "./Button";
import useFetch from "../../hooks/useFetch";
import { getSettings } from "../../services/settingsService";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const { data } = useFetch(getSettings);
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsapp = data?.whatsapp;

  return (
    <header className="site-navbar">
      <Link className="site-navbar__brand" to="/#inicio">
        <img
          src="/images/nosotros/logo.png"
          alt="CH Cars - Taller de chapa y pintura"
          className="site-navbar__logo"
        />
      </Link>
<nav
  className={`site-navbar__nav ${
    menuOpen ? "site-navbar__nav--open" : ""
  }`}
  aria-label="Principal"
>
  <HashLink className="site-navbar__link" smooth to="/#inicio" onClick={() => setMenuOpen(false)}>
    Inicio
  </HashLink>

  <HashLink className="site-navbar__link" smooth to="/#aseguradoras" onClick={() => setMenuOpen(false)}>
    Aseguradoras
  </HashLink>

  <HashLink className="site-navbar__link" smooth to="/#servicios" onClick={() => setMenuOpen(false)}>
    Servicios
  </HashLink>

  <Link className="site-navbar__link" to="/trabajos" onClick={() => setMenuOpen(false)}>
    Trabajos
  </Link>

  <Link className="site-navbar__link" to="/faq" onClick={() => setMenuOpen(false)}>
    Preguntas frecuentes
  </Link>

  <Link className="site-navbar__link" to="/nosotros" onClick={() => setMenuOpen(false)}>
    Nosotros
  </Link>

  {whatsapp ? (
        <Button
    as="a"
    className="site-navbar__cta site-navbar__cta--mobile"
    href={`https://wa.me/${whatsapp}`}
    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                        <path fill="currentColor" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.08.78 3.05a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.03-1.03a2 2 0 0 1 2.11-.45c.97.4 2 .66 3.05.78A2 2 0 0 1 22 16.92z" />
                    </svg>

    <span>Presupuesto</span>
</Button>
      ) : null}
</nav>

      <button
        className="site-navbar__toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        >
        {menuOpen ? "✕" : "☰"}
      </button>

      {whatsapp ? (
        <Button
    as="a"
    className="site-navbar__cta site-navbar__cta--desktop"
    href={`https://wa.me/${whatsapp}`}
    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                        <path fill="currentColor" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.08.78 3.05a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.03-1.03a2 2 0 0 1 2.11-.45c.97.4 2 .66 3.05.78A2 2 0 0 1 22 16.92z" />
                    </svg>

    <span>Presupuesto</span>
</Button>
      ) : null}
    </header>
  );
}

export default Navbar;