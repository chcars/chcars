import useFetch from "../../hooks/useFetch";
import { getSettings } from "../../services/settingsService";
import "./FloatingActions.css";

function FloatingActions() {
    const { data, loading } = useFetch(getSettings);

    if (loading || !data) return null;

    const { whatsapp, google_maps_url } = data || {};

    if (!whatsapp && !google_maps_url) return null;

    return (
        <div className="floating-actions" aria-hidden={false}>
            {google_maps_url ? (
                <a
                    className="floating-actions__btn"
                    href={google_maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ubicación"
                    title="Ubicación"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </a>
            ) : null}

            {whatsapp ? (
                <a
                    className="floating-actions__btn floating-actions__btn--whatsapp"
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                        <path fill="currentColor" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.08.78 3.05a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.03-1.03a2 2 0 0 1 2.11-.45c.97.4 2 .66 3.05.78A2 2 0 0 1 22 16.92z" />
                    </svg>
                </a>
            ) : null}
        </div>
    );
}

export default FloatingActions;
