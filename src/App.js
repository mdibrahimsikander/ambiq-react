import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/AmbulanceScroll.css';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation(); // Get the current location

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66a74fb2becc2fed692c59a2/1i3uoul6j';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
