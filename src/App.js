import React from "react";
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
import activejobdata from "./Data/activeJobsData"
import "./App.css";

function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Adjust the time as per your requirement

  //   return () => clearTimeout(timer);
  // }, []);


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
      <Footer />
    </>
  );
}

export default App;
