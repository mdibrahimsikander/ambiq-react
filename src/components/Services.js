import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "../styles/Services.css";
import "../styles/responsive.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Services({ services }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="team_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              <span>Services</span>
            </h2>
          </div>
          <Slider {...settings}>
            {services.map((service, index) => (
              <div className="service_item" key={index}>
                <div className="box">
                  <div className="img-box">
                    <img src={service.imgSrc} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>{service.heading}</h5>
                    <h6>{service.description}</h6>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <button
        type="button"
        role="presentation"
        className="owl-next"
        style={{ ...style, display: "block" }}
        onClick={onClick}
        >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <button
        type="button"
        role="presentation"
        className="owl-prev "
        style={{ ...style, display: "block" }}
        onClick={onClick}
        >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </button>
    );
}
Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Services;
