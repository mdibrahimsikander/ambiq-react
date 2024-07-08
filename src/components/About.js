import React, {useState} from "react";
import aboutImg from "../assets/about-img.jpg";
import "../styles/About.css";
import "../styles/responsive.css";

const About = () => {
    const [readMore,setReadMore]=useState(false);

    const fullText=`AmbiQ is a revolutionary online ambulance booking application
                that operates on a model similar to popular ride-hailing
                services like Ola and Uber. With AmbiQ, individuals can
                seamlessly book ambulances round the clock, ensuring prompt
                assistance at critical moments, all at an affordable price
                point. The app offers real-time tracking of the ambulance,
                allowing users to know the exact arrival time, and provides
                access to a network of well-equipped ambulances staffed with
                trained medical professionals. AmbiQ also integrates with local
                hospitals and medical facilities to ensure patients receive
                immediate care upon arrival. Whether it's a medical emergency or
                a scheduled transport, AmbiQ is dedicated to providing reliable
                and efficient service, making it a crucial tool for healthcare
                accessibility in Kolkata.`

    const shortText=`AmbiQ is a revolutionary online ambulance booking application
                that operates on a model similar to popular ride-hailing
                services like Ola and Uber. With AmbiQ, individuals can
                seamlessly book ambulances round the clock, ensuring prompt
                assistance at critical moments, all at an affordable price
                point.`

return(
  <div className="hero_area">
    <section className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={aboutImg} alt="About Us" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About <span>US</span>
                </h2>
              </div>
              <p>
                {readMore ? fullText : shortText}
              </p>
              <button onClick={()=>setReadMore(!readMore)} >{readMore ? "Read Less" : "Read More"}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)};

export default About;
