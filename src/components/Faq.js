import React from 'react'
import PropTypes from "prop-types";
import '../styles/Faq.css'
import '../styles/responsive.css'

const Faq = ({ faqs }) => {
  return (
    <>
      {/* FAQ section */}
      <section className="faq_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              <span>FAQ's</span>
            </h2>
          </div>
        </div>
        <div className="container px-0">
          <div
            id="customCarousel2"
            className="carousel  carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {faqs.map((faq, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="box">
                    <div className="faq_info">
                      <div className="faq_name">
                        <h5>{faq.Question}</h5>
                      </div>
                    </div>
                    <p>
                      {faq.Answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel_btn-box">
              <a
                className="carousel-control-prev"
                href="#customCarousel2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end FAQ section */}

    </>
  )
}

Faq.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      Question: PropTypes.string.isRequired,
      Answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Faq
