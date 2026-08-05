import { Link } from "react-router-dom";
import Button from "./Button";
import useFetch from "../../hooks/useFetch";
import { getSettings } from "../../services/settingsService";
import "./Navbar.css";

function Navbar() {
  const { data } = useFetch(getSettings);
  const whatsapp = data?.whatsapp;

  return (
    <header className="site-navbar">
      <Link className="site-navbar__brand" to="/#inicio">
        CH Cars
      </Link>

      <nav className="site-navbar__nav" aria-label="Principal">
        <Link className="site-navbar__link" to="/#inicio">
          Inicio
        </Link>
        <Link className="site-navbar__link" to="/#aseguradoras">
          Aseguradoras
        </Link>
        <Link className="site-navbar__link" to="/#servicios">
          Servicios
        </Link>
        <Link className="site-navbar__link" to="/trabajos">
          Trabajos
        </Link>
        <Link className="site-navbar__link" to="/nosotros">
          Nosotros
        </Link>
        <Link className="site-navbar__link" to="/faq">
          Preguntas frecuentes
        </Link>
      </nav>

      {whatsapp ? (
        <Button
          as="a"
          className="site-navbar__cta"
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
        >
          Agendá tu turno
        </Button>
      ) : null}
    </header>
  );
}

export default Navbar;