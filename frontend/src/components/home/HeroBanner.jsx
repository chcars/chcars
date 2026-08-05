import { Link } from "react-router-dom";
import Button from "../common/Button";
import Loader from "../common/Loader";
import useFetch from "../../hooks/useFetch";
import { getBanner } from "../../services/bannerService";
import "./HeroBanner.css";

function isExternalUrl(url) {
  return /^https?:\/\//i.test(url) || /^wa\.me\//i.test(url) || /^\/\//.test(url);
}

function HeroBanner() {
  const { data, loading, error } = useFetch(getBanner);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>No se pudo cargar el banner</p>;
  }

  if (!data) {
    return null;
  }

  const ActionComponent = isExternalUrl(data.button_url) ? "a" : Link;
  const actionProps = isExternalUrl(data.button_url)
    ? {
        href: data.button_url,
        target: "_blank",
        rel: "noreferrer"
      }
    : {
        to: data.button_url
      };

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: data.photo ? `url(${data.photo})` : "none"
      }}
    >
      <div className="hero-banner__overlay" />

      <div className="hero-banner__content">
        <h1 className="hero-banner__title">{data.text}</h1>

        {data.button_text ? (
          <Button as={ActionComponent} className="hero-banner__button" {...actionProps}>
            {data.button_text}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default HeroBanner;