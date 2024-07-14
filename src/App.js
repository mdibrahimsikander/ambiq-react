import "./App.css";
import React, { useEffect, useState } from "react";
import Splash from "../src/components/Splash"
import MainAppContent from "../src/components/MainComponent"
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as per your requirement

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {loading ? <Splash/> : <MainAppContent/>}
    </div>
  );
}

export default App;
