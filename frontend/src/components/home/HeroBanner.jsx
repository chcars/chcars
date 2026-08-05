import useFetch from "../../hooks/useFetch";
import { getBanner } from "../../services/bannerService";
import { getSettings } from "../../services/settingsService";
import Loader from "../common/Loader";
import "./HeroBanner.css";
import useIsMobile from "../../hooks/useIsMobile";

function isExternal(url) {
    return typeof url === "string" && (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//"));
}

function HeroBanner() {
    const { data: banner, loading: bannerLoading, error: bannerError } = useFetch(getBanner);
    const { data: settings, loading: settingsLoading, error: settingsError } = useFetch(getSettings);
    const isMobile = useIsMobile();

    if (bannerLoading || settingsLoading) return <Loader />;

    if (bannerError || settingsError) return <p>No se pudo cargar el banner</p>;

    if (!banner || !settings) return null;


    const lines = banner.text ? banner.text.split("\n") : [];

    const overlay = isMobile
    ? "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.60) 65%, rgba(0,0,0,0.40) 100%)"
    : "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.60) 40%, rgba(0,0,0,0.30) 75%, rgba(0,0,0,0.15) 100%)";

const backgroundStyle = {
    backgroundImage: `${overlay}, url(${
        isMobile && banner.photo_mobile ? banner.photo_mobile : banner.photo
    })`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "55% center" : "center right",
};
    return (
        <section className="hero-banner" style={backgroundStyle} aria-label="Hero banner">
            <div className="hero-banner__inner">
                <div className="hero-banner__content">
                    <div className="hero-banner__badge">
                        <span className="hero-banner__badge-line" />
                        <span className="hero-banner__badge-text">+ 20 AÑOS DE EXPERIENCIA</span>
                    </div>

                    <h1 className="hero-banner__title">
                        {lines.map((ln, idx) => (
                            <span
                                key={idx}
                                className={"hero-banner__title-line " + (idx === 1 ? "is-accent" : "")}
                            >
                                {ln}
                            </span>
                        ))}
                    </h1>

                    {settings.slogan ? (
                        <p className="hero-banner__subtitle">{settings.slogan}</p>
                    ) : null}

                    <div className="hero-banner__actions">
    {banner.button_text ? (
        <a
            className="hero-btn hero-btn--primary"
            href={banner.button_url || "#"}
            {...(isExternal(banner.button_url)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
        >
            <span>{banner.button_text}</span>

            <svg
                className="hero-btn__icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    ) : null}

    <a
        className="hero-btn hero-btn--secondary"
        href={settings.google_maps_url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <svg
            className="hero-btn__icon hero-btn__icon--left"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="10"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.6"
            />
        </svg>

        <span>Cómo llegar</span>
    </a>
</div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
