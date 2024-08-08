import React from "react";
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