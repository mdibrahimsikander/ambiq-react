import React, { useEffect } from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import FeatureImage from "../assets/feature-side-img.png";
import "../styles/KeyFeatures.css";
import "../styles/responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";

const KeyFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="hero_area">
      <section className="feature_section layout_padding">
        <div className="side_img">
          <img src={FeatureImage} alt="Feature Side" data-aos="fade-left" />
        </div>
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Key <span>Features</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3" >
              <div className="box">
                <div className="img-box">
                  <img src={f1} alt="Life Saving" />
                </div>
                <div className="detail-box">
                  <h4>Life Saving</h4>
                  <p>
                    AmbiQ prioritizes prompt response and efficient service
                    delivery, understanding the critical nature of emergency
                    situations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" >
              <div className="box">
                <div className="img-box">
                  <img src={f2} alt="Accessible" />
                </div>
                <div className="detail-box">
                  <h4>Accessible</h4>
                  <p>
                    AmbiQ is accessible to anyone with a smartphone, making it
                    convenient for users to request emergency assistance
                    anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" >
              <div className="box">
                <div className="img-box">
                  <img src={f3} alt="Precise Location" />
                </div>
                <div className="detail-box customise">
                  <h4>Precise Location</h4>
                  <p>
                    Our platform ensures precise location tracking, allowing for
                    swift dispatch of ambulances to the exact pickup point.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" >
              <div className="box">
                <div className="img-box">
                  <img src={f4} alt="Cost Friendly" />
                </div>
                <div className="detail-box">
                  <h4>Cost Friendly</h4>
                  <p>
                    We believe in making emergency medical services accessible
                    to all, which is why AmbiQ offers affordable rates for
                    ambulance bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyFeatures;
