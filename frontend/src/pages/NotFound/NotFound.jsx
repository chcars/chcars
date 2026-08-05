import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <section className="not-found-page">
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>La página que buscás no existe o fue movida. Podés volver al inicio para seguir navegando.</p>
            <Link className="not-found-page__link" to="/">
                Volver al inicio
            </Link>
        </section>
    );
}

export default NotFound;