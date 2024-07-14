
import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import sliderImg1 from '../assets/slider-img.jpg';
import sliderImg2 from '../assets/slider-img2.png';
import About from "../components/About";
import KeyFeatures from "../components/KeyFeatures";
import Contact from "../components/Contact";    




const slideData = [
  {
    heading: 'What Will You Do When Someone Close To You is in',
    subHeading: ' Emergency Situation?',
    description: 'You will call an Ambulance, Right?',
    imgSrc: sliderImg1,
    slNo: "1",

  },
  {
    heading: 'Here, we bring a solution for you -',
    subHeading: 'AmbiQ',
    description: "Kolkata's first online ambulance service at your doorstep, providing rapid and reliable emergency medical assistance with just a few clicks, ensuring timely care when you need it the most.",
    imgSrc: sliderImg2,
    slNo: "0",

  },
  {
    heading: 'One Tap',
    subHeading: 'To Hospital',
    description: "AmbiQ uses your phone's GPS to detect your location and connects you with the nearest available ambulance. The ambulance will take you to the nearest hospital or the hospital you want to go.",
    imgSrc: sliderImg2,
    slNo: "0",

  },
];



function MainComponent() {

  return (
    <>
      <Header />
      <Slider slides={slideData} />
      <About />
      <KeyFeatures />
      <Contact />
    </>
  );
}

export default MainComponent;
