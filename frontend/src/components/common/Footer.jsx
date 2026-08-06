import useFetch from "../../hooks/useFetch";
import { getSettings } from "../../services/settingsService";
import "./Footer.css";

function Footer() {
    const { data, loading } = useFetch(getSettings);

    if (loading || !data) {
        return null;
    }

    return (
        <footer className="site-footer">

            <div className="site-footer__grid">

                {/* Empresa */}
                <section className="site-footer__column">

                    <div className="site-footer__badge">
                        <span className="site-footer__badge-line"></span>
                        <span className="site-footer__badge-text">
                            CONTACTO
                        </span>
                    </div>

                    <h2 className="site-footer__brand">
                        {data.business_name}
                    </h2>

                    {data.slogan && (
                        <p className="site-footer__description">
                            {data.slogan}
                        </p>
                    )}

                    {data.address && (
                        <a
                            className="site-footer__info"
                            href={data.google_maps_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 21s7-5.69 7-11a7 7 0 1 0-14 0c0 5.31 7 11 7 11Z"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                                <circle
                                    cx="12"
                                    cy="10"
                                    r="2.5"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                            </svg>

                            <span>{data.address}</span>
                        </a>
                    )}

                    {data.opening_hours && (
                        <div className="site-footer__info">

                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="9"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                                <path
                                    d="M12 7V12L15 14"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <span>{data.opening_hours}</span>

                        </div>
                    )}

                </section>

                {/* Comunicación */}

                <section className="site-footer__column">

                    <h3>Comunicate</h3>

                    {data.phone && (
                        <a href={`tel:${data.phone}`}>

                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.08.78 3.05a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.03-1.03a2 2 0 0 1 2.11-.45c.97.4 2 .66 3.05.78A2 2 0 0 1 22 16.92Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <span>{data.phone}</span>

                        </a>
                    )}

                    {data.whatsapp && (
                        <a
                            href={`https://wa.me/${data.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >

<svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
>
    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.55 0 .27 5.28.27 11.79c0 2.08.54 4.1 1.57 5.88L0 24l6.5-1.7a11.76 11.76 0 0 0 5.55 1.41h.01c6.5 0 11.79-5.28 11.79-11.79 0-3.15-1.23-6.11-3.33-8.44ZM12.06 21.6a9.77 9.77 0 0 1-4.98-1.37l-.36-.21-3.86 1.01 1.03-3.76-.24-.38a9.77 9.77 0 1 1 8.41 4.71Zm5.37-7.33c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.94 1.14-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.15-.18.2-.3.3-.49.1-.19.05-.36-.02-.5-.08-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.49.07-.75.36-.26.29-1 1-1 2.43s1.02 2.81 1.16 3c.15.19 2.01 3.07 4.87 4.3.68.3 1.22.48 1.64.61.69.22 1.31.19 1.8.12.55-.08 1.72-.7 1.96-1.38.24-.67.24-1.25.17-1.38-.07-.13-.26-.2-.55-.34Z"/>
</svg>
                            <span>WhatsApp</span>

                        </a>
                    )}

                    {data.email && (
                        <a href={`mailto:${data.email}`}>

                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M4 6H20V18H4V6ZM4 7L12 13L20 7"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span>{data.email}</span>

                        </a>
                    )}

                </section>

                {/* Redes */}

                <section className="site-footer__column">

                    <h3>Seguinos</h3>

                    {data.facebook_url && (
                        <a
                            href={data.facebook_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12A10 10 0 1 0 10.44 21.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.55V12h2.74l-.44 2.89h-2.3v6.98A10 10 0 0 0 22 12z" />
                            </svg>

                            <span>Facebook</span>
                        </a>
                    )}

                    {data.instagram_url && (
                        <a
                            href={data.instagram_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5c3.18 0 5.75-2.57 5.75-5.75v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6z" />
                            </svg>

                            <span>Instagram</span>
                        </a>
                    )}

                </section>

            </div>

            <div className="site-footer__bottom">

                <small>
                    © {new Date().getFullYear()} {data.business_name}. Todos los derechos reservados.
                </small>

            </div>

        </footer>
    );
}

export default Footer;