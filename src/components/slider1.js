import React, { useEffect, useState } from 'react';
import slider2 from '../assets/sliderBanner2.jpg';
import slider3 from '../assets/ambiq_bnr1.jpg';
import "../styles/slider1.css";

function Slider1() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const slides = [slider2, slider3];

    useEffect(() => {
        const totalSlides = slides.length;

        const sliderInterval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
                setFade(true);
            }, 1000);
        }, 5000);

        return () => clearInterval(sliderInterval);
    }, [slides]);

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setFade(true);
        }, 300);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
            setFade(true);
        }, 300);
    };

    return (
        <div className="slider-wrapper">
            <main className="main-content">
                <div className="slider-container">
                    <div className="slider">
                        {slides.map((slide, index) => (
                            <section
                                key={index}
                                className="slide"
                                style={{
                                    backgroundImage: `url(${slide})`,
                                    opacity: fade && index === currentIndex ? 1 : 0,
                                    transition: 'opacity 1000ms ease-in-out',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: index === currentIndex ? 1 : 0,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="slide-content"></div>
                            </section>
                        ))}
                        <nav className="slider-nav">
                            <span className="prev-slide" onClick={handlePrev}></span>
                            <span className="next-slide" onClick={handleNext}></span>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Slider1;
