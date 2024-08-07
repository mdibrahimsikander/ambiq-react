import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Slider from "./Slider";
import slideData from "../Data/slideData";
import About from "./About";
import KeyFeatures from "./KeyFeatures";
import Services from "./Services";
import servicesData from "../Data/servicesData";
import Faq from "./Faq";
import faqData from "../Data/faqData";
import Contact from "./Contact";
import Careers from "./Careers";
import Footer from "./Footer";
import Job from "./JobApplicationForm";
import activejobdata from "../Data/activeJobsData";
import SplashScreen from "./Splash";
// import "./styles/AmbulanceScroll.css";

function Home() {
//   const [showScrollButton, setShowScrollButton] = useState(false);
//   const location = useLocation(); // Get the current location

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     const checkScrollTop = () => {
//       if (!showScrollButton && window.pageYOffset > 200) {
//         setShowScrollButton(true);
//       } else if (showScrollButton && window.pageYOffset <= 200) {
//         setShowScrollButton(false);
//       }
//     };

//     window.addEventListener("scroll", checkScrollTop);

//     return () => {
//       window.removeEventListener("scroll", checkScrollTop);
//     };
//   }, [showScrollButton]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location]);

//   useEffect(() => {
//     var Tawk_API = Tawk_API || {},
//       Tawk_LoadStart = new Date();
//     (function () {
//       var s1 = document.createElement("script"),
//         s0 = document.getElementsByTagName("script")[0];
//       s1.async = true;
//       s1.src = "https://embed.tawk.to/66a74fb2becc2fed692c59a2/1i3uoul6j";
//       s1.charset = "UTF-8";
//       s1.setAttribute("crossorigin", "*");
//       s0.parentNode.insertBefore(s1, s0);
//     })();
//   }, []);

  return (
    <>
      <Slider slides={slideData} />
      <About />
      <KeyFeatures />
      <Services services={servicesData} />
      <Faq faqs={faqData} />
      <Contact />
      {/* {showScrollButton && (
        <button
          onClick={handleScrollToTop}
          className="scroll-to-top-button"
        ></button>
      )} */}
      {/* <SplashScreen /> */}
    </>
  );
}

export default Home;
/*
git add .
git commit -m "Ambulance Scroll added"          
git push
*/
