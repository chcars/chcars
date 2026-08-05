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
        <section className="site-footer__column">
          <h3>Contacto</h3>
          <p className="site-footer__brand">{data.business_name}</p>
          {data.slogan ? <p>{data.slogan}</p> : null}
          {data.address ? <p>{data.address}</p> : null}
          {data.opening_hours ? <p>{data.opening_hours}</p> : null}
        </section>

        <section className="site-footer__column">
          <h3>Comunicate</h3>
          {data.phone ? <a href={`tel:${data.phone}`}>{data.phone}</a> : null}
          {data.whatsapp ? (
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          ) : null}
          {data.email ? <a href={`mailto:${data.email}`}>{data.email}</a> : null}
        </section>

        <section className="site-footer__column">
          <h3>Seguinos</h3>
          {data.facebook_url ? (
            <a href={data.facebook_url} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          ) : null}
          {data.instagram_url ? (
            <a href={data.instagram_url} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          ) : null}
          {data.tiktok_url ? (
            <a href={data.tiktok_url} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          ) : null}
        </section>
      </div>

      <small className="site-footer__copyright">
        © {new Date().getFullYear()} {data.business_name}. Todos los derechos reservados.
      </small>
    </footer>
  );
}

export default Footer;