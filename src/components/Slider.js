import React from "react";
import PropTypes from "prop-types";
import sirenImage from "../assets/ambulance-siren.png";
import dots from "../assets/dots.png";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import "../styles/Slider.css";
import "../styles/AnimatedButton.css"
import { Link } from "react-router-dom";

const Slider = ({ slides }) => (
  <div className="hero_area">
    <section className="slider_section">
      <div className="dot_design">
        <img src={dots} alt="dots" />
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <div className="play_btn">
                        <button>
                          <img
                            src={sirenImage}
                            alt="Siren"
                            className="siren_image"
                          />
                        </button>
                      </div>

                      {slide.slNo === "1" && (
                        <h2>
                          {slide.heading}
                          <span className="Emergency">
                            {slide.subHeading}
                          </span>{" "}
                          <br />
                          <span>{slide.description}</span>
                        </h2>
                      )}

                      {slide.slNo === "0" && (
                        <>
                          <h1>
                            {slide.heading}
                            <br />
                            <span>{slide.subHeading}</span>
                          </h1>

                          <p>{slide.description}</p>
                        </>
                      )}
                      <button className="custom-btn btn-11">
                        <Link to="/contact" className="button-text">Contact Us</Link>
                        <div className="dot"></div> 
                      </button>                       
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={slide.imgSrc} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel_btn-box">
          <a
            className="carousel-control-prev"
            href="#customCarousel1"
            role="button"
            data-slide="prev"
          >
            <img src={prevIcon} alt="Previous" />
            {/* <span className="sr-only">Previous</span> */}
          </a>
          <a
            className="carousel-control-next"
            href="#customCarousel1"
            role="button"
            data-slide="next"
          >
            <img src={nextIcon} alt="Next" />
            {/* <span className="sr-only">Next</span> */}
          </a>
        </div>
      </div>
    </section>
  </div>
);

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      subHeading: PropTypes.string,
      description: PropTypes.string,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
