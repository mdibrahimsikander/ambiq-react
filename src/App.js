import "./App.css";
import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import slideData from './Data/slideData';
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import Services from "./components/Services";
import servicesData from './Data/servicesData';
import Faq from "./components/Faq";
import faqData from "./Data/faqData";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Slider slides={slideData} />
      <About />
      <KeyFeatures />
      <Services services={servicesData}/>
      <Faq faqs={faqData}/>
      <Footer />
    </>
  );
}

export default App;
