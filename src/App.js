import "./styles/Splash.css"
import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/AmbulanceScroll.css';


const Splash = () => {

    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isSplashVisible, setIsSplashVisible] = useState(true); // State to control splash screen visibility
    const [isAppLoaded, setIsAppLoaded] = useState(false); // State to control app load status
    const location = useLocation(); // Get the current location

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Disable scrolling during splash screen
        document.body.classList.toggle('no-scroll', isSplashVisible);

        return () => {
            document.body.classList.remove('no-scroll'); // Ensure scrolling is re-enabled on unmount
        };
    }, [isSplashVisible]);
    

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScrollButton && window.pageYOffset > 200) {
                setShowScrollButton(true);
            } else if (showScrollButton && window.pageYOffset <= 200) {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScrollButton]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    useEffect(() => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

        setTimeout(()=>{

            (function () {
                    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                    s1.async = true;
                    s1.src = 'https://embed.tawk.to/66a74fb2becc2fed692c59a2/1i3uoul6j';
                    s1.charset = 'UTF-8';
                    s1.setAttribute('crossorigin', '*');
                    s0.parentNode.insertBefore(s1, s0);
                })();
            
        },6000)
        // (function () {
        //     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        //     s1.async = true;
        //     s1.src = 'https://embed.tawk.to/66a74fb2becc2fed692c59a2/1i3uoul6j';
        //     s1.charset = 'UTF-8';
        //     s1.setAttribute('crossorigin', '*');
        //     s0.parentNode.insertBefore(s1, s0);
        // })();
    }, []);

    useEffect(() => {
        // Set a timeout to hide the splash screen after the app has loaded
        const splashTimeout = setTimeout(() => {
            if (isAppLoaded) {
                setIsSplashVisible(false);
            }
        }, 5000);

        return () => clearTimeout(splashTimeout); // Clear timeout if the component unmounts
    }, [isAppLoaded]);

    useEffect(() => {
        // Simulate app loading
        window.addEventListener('load', () => {
            setIsAppLoaded(true);
        });

        return () => {
            window.removeEventListener('load', () => {
                setIsAppLoaded(true);
            });
        };
    }, []);


    useEffect(() => {

        const loader = document.querySelector('.loader');
        const box = document.querySelector('.box');
        const gif = document.querySelector('.gif');

        setTimeout(() => {
            gif.classList.add('play');

        }, 1000);

        setTimeout(() => {
            loader.classList.add('hide')
        }, 5000);

    });


    return (
        <>
            <div class="loader">
                <div className='box' id="boxxx">
                    <div className='gif'></div>
                    <span className="char">A</span>
                    <span className="char">M</span>
                    <span className="char">B</span>
                    <span className="char">I</span>
                    <span className="char">Q</span>
                </div>
            </div>
            <div class="page">
                <Header />
                <Outlet />
                {showScrollButton && (
                    <button
                        onClick={handleScrollToTop}
                        className="scroll-to-top-button"
                    >
                    </button>
                )}
                <Footer />
            </div>
        </>
    )
}

export default Splash
