import { useEffect, useRef, useState } from "react";
import Loader from "../common/Loader";
import useFetch from "../../hooks/useFetch";
import { getAseguradoras } from "../../services/aseguradorasService";
import "./AseguradorasList.css";

function AseguradorasList() {
    const { data, loading, error } = useFetch(getAseguradoras);

    const sliderRef = useRef(null);
    const animationRef = useRef(null);

    const isDraggingRef = useRef(false);
    const isPausedRef = useRef(false);

    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);

    const [, forceUpdate] = useState(false);


    /*
     * ================================
     * AUTO SCROLL
     * ================================
     */

    useEffect(() => {

        if (!data || data.length === 0) {
            return;
        }

        const slider = sliderRef.current;

        if (!slider) {
            return;
        }

        /*
         * Tenemos 3 copias de las aseguradoras.
         *
         * Nos posicionamos en la copia del medio
         * para poder movernos tanto a izquierda
         * como a derecha.
         */
        const positionGroup = () => {

            const groupWidth = slider.scrollWidth / 3;

            if (slider.scrollLeft <= 0) {
                slider.scrollLeft += groupWidth;
            }

            if (slider.scrollLeft >= groupWidth * 2) {
                slider.scrollLeft -= groupWidth;
            }

        };


        /*
         * Posición inicial
         */
        const groupWidth = slider.scrollWidth / 3;

        slider.scrollLeft = groupWidth;


        /*
         * Animación
         */
        const autoScroll = () => {

            if (
                !isPausedRef.current &&
                !isDraggingRef.current
            ) {
                slider.scrollLeft += 0.5;
            }

            positionGroup();

            animationRef.current =
                requestAnimationFrame(autoScroll);
        };


        animationRef.current =
            requestAnimationFrame(autoScroll);


        /*
         * Cleanup
         */
        return () => {

            if (animationRef.current) {
                cancelAnimationFrame(
                    animationRef.current
                );
            }

        };

    }, [data]);


    /*
     * ================================
     * PAUSA
     * ================================
     */

    const pauseSlider = () => {

        isPausedRef.current = true;

        forceUpdate(value => !value);
    };


    const resumeSlider = () => {

        setTimeout(() => {

            isPausedRef.current = false;

            forceUpdate(value => !value);

        }, 1200);

    };


    /*
     * ================================
     * MOUSE
     * ================================
     */

    const handleMouseDown = (event) => {

        const slider = sliderRef.current;

        if (!slider) {
            return;
        }

        isDraggingRef.current = true;

        pauseSlider();

        startXRef.current =
            event.pageX - slider.offsetLeft;

        startScrollLeftRef.current =
            slider.scrollLeft;

        slider.classList.add("is-dragging");
    };


    const handleMouseMove = (event) => {

        if (!isDraggingRef.current) {
            return;
        }

        const slider = sliderRef.current;

        if (!slider) {
            return;
        }

        const x =
            event.pageX - slider.offsetLeft;

        const walk =
            (x - startXRef.current) * 1.2;

        slider.scrollLeft =
            startScrollLeftRef.current - walk;
    };


    const handleMouseUp = () => {

        if (!isDraggingRef.current) {
            return;
        }

        isDraggingRef.current = false;

        if (sliderRef.current) {
            sliderRef.current.classList.remove(
                "is-dragging"
            );
        }

        resumeSlider();
    };


    /*
     * ================================
     * TOUCH
     * ================================
     */

    const handleTouchStart = (event) => {

        const slider = sliderRef.current;

        if (!slider) {
            return;
        }

        isDraggingRef.current = true;

        pauseSlider();

        startXRef.current =
            event.touches[0].pageX -
            slider.offsetLeft;

        startScrollLeftRef.current =
            slider.scrollLeft;

        slider.classList.add("is-dragging");
    };


    const handleTouchMove = (event) => {

        if (!isDraggingRef.current) {
            return;
        }

        const slider = sliderRef.current;

        if (!slider) {
            return;
        }

        const x =
            event.touches[0].pageX -
            slider.offsetLeft;

        const walk =
            (x - startXRef.current) * 1.2;

        slider.scrollLeft =
            startScrollLeftRef.current - walk;
    };


    const handleTouchEnd = () => {

        if (!isDraggingRef.current) {
            return;
        }

        isDraggingRef.current = false;

        if (sliderRef.current) {
            sliderRef.current.classList.remove(
                "is-dragging"
            );
        }

        resumeSlider();
    };


    /*
     * ================================
     * ESTADOS
     * ================================
     */

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <p>
                No se pudieron cargar las aseguradoras
            </p>
        );
    }

    if (!data || data.length === 0) {
        return null;
    }


    /*
     * ================================
     * REPETIR LOGOS
     * ================================
     */

    const insurers = [
        ...data,
        ...data,
        ...data
    ];


    return (
        <section
            className="insurers-list"
            id="aseguradoras"
        >

            <header className="insurers-list__header">

                <div className="insurers-list__badge">

                    <span className="insurers-list__badge-line"></span>

                    <span className="insurers-list__badge-text">
                        ASEGURADORAS
                    </span>

                </div>

                <h2>
                    Trabajamos con las principales compañías de seguros
                </h2>

                <p>
                    Gestionamos el trámite directamente con tu aseguradora
                    para que no tengas que preocuparte por nada.
                </p>

            </header>


            <div className="insurers-list__viewport">

                <div
                    className="
                        insurers-list__fade
                        insurers-list__fade--left
                    "
                ></div>


                <div
                    ref={sliderRef}
                    className="insurers-list__slider"

                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}

                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >

                    <div className="insurers-list__track">

                        {insurers.map((item, index) => (

                            <figure
                                key={`${item.aseguradora_id}-${index}`}
                                className="insurers-list__item"
                            >

                                <img
                                    src={item.photo}
                                    alt={item.photo_alt}
                                    draggable="false"
                                />

                            </figure>

                        ))}

                    </div>

                </div>


                <div
                    className="
                        insurers-list__fade
                        insurers-list__fade--right
                    "
                ></div>

            </div>

        </section>
    );
}

export default AseguradorasList;