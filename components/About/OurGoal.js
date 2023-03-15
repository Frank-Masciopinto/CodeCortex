import React from "react";

const OurGoal = () => {
  return (
    <>
      <div className="about-area pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-wrap-image" data-tilt>
                <img
                  src="/images/about/about-5.jpg"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-wrap-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>OUR GOAL</span>
                <h3>Your Trusted Partner For All IT Solutions</h3>
                <p>
                  Our Goal is to build long-term partnerships with our clients,
                  working closely with them to develop scalable and adaptable
                  web development solutions that meet their evolving business
                  needs.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <h3>Our Vision</h3>
                  <p>
                    Our ultimate vision is to empower businesses to not only
                    succeed online, but to become industry leaders in their
                    respective fields. By delivering world-class web development
                    solutions, we aspire to be the catalyst that helps
                    businesses achieve their wildest ambitions and disrupt the
                    status quo.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h3>Our Mission</h3>
                  <p>
                    We aspire to disrupt the traditional web development
                    industry by leading the charge in delivering
                    blockchain-based solutions that are not only secure and
                    scalable, but also environmentally sustainable.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="card-image" data-tilt>
                    <img src="/images/about/about-4.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-circle-shape">
          <img src="/images/about/about-circle.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default OurGoal;
