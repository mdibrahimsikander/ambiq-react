import React, { useEffect } from "react";
import Slider from "./Slider";
import slideData from "../Data/slideData";
import About from "./About";
import KeyFeatures from "./KeyFeatures";
import Services from "./Services";
import servicesData from "../Data/servicesData";
import Faq from "./Faq";
import faqData from "../Data/faqData";
import Contact from "./Contact";



function Home() {

  useEffect(() => {
    setTimeout(() => {

      document.body.classList.remove('no-scroll');

    }, 5100);
    // Ensure scrolling is re-enabled on unmount
  }, []);


  return (
    <>

      <Slider slides={slideData} />
      <About />
      <KeyFeatures />
      <Services services={servicesData} />
      <Faq faqs={faqData} />
      <Contact />
    </>
  );
}

export default Home;