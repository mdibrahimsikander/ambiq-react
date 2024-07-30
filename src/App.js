import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import slideData from './Data/slideData';
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import Services from "./components/Services";
import servicesData from './Data/servicesData';
import Faq from "./components/Faq";
import faqData from "./Data/faqData";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import Job from "./components/JobApplicationForm";
import activejobdata from "./Data/activeJobsData";
 import './styles/AmbulanceScroll.css';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

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
      <Routes>
        <Route path="/" element={
          <>
            <Slider slides={slideData} />
            <About />
            <KeyFeatures />
            <Services services={servicesData} />
            <Faq faqs={faqData} />
            <Contact />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/keyfeatures" element={<KeyFeatures />} />
        <Route path="/services" element={<Services services={servicesData} />} />
        <Route path="/faq" element={<Faq faqs={faqData} />} />
        <Route path="/careers" element={<Careers />} />
        {activejobdata.map((job) => (
          <Route key={job.link} path={`/careers/${job.link}`} element={<Job job={job} />} />
        ))}
        <Route path="/contact" element={<Contact />} />
      </Routes>
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
