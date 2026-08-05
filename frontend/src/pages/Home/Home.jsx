import HeroBanner from "../../components/home/HeroBanner";
import AseguradorasList from "../../components/home/AseguradorasList";
import ServicesSection from "../../components/home/ServicesSection";
import MiniFaq from "../../components/home/MiniFaq";
import LocationMap from "../../components/home/LocationMap";
import ReviewsSection from "../../components/home/ReviewsSection";
import useScrollToHash from "../../hooks/useScrollToHash";

function Home() {
    useScrollToHash();

    return (
        <>
            <section id="inicio">
                <HeroBanner />
            </section>

            <section id="aseguradoras">
                <AseguradorasList />
            </section>

            <section id="servicios">
                <ServicesSection />
            </section>

            <MiniFaq />
            <LocationMap />
            <ReviewsSection />
        </>
    );
}

export default Home;
