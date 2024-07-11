import "./App.css";
import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import slideData from './Data/slideData';
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import Services from "./components/Services";
import servicesData from './Data/servicesData';
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Slider slides={slideData} />
      <About />
      <KeyFeatures />
      <Services services={servicesData}/>
      <Footer />
    </>
  );
}

export default App;
