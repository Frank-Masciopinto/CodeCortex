import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-tilt>
                <img
                  src="/images/about/about-2.png"
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
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>We Are All In One IT Solution & Technology Company</h3>
                <p>
                  Welcome to CodeCortex, the web development company that
                  understands the unique needs of your business. We're not just
                  another run-of-the-mill development company - we're a team of
                  experts who are passionate about creating customized solutions
                  that exceed your expectations.
                </p>
                <p>
                  Our team of experienced developers use the latest technologies
                  and best practices to deliver exceptional results that are
                  optimized for performance and security. We're committed to
                  delivering high-quality and reliable services that help your
                  business achieve its full potential online.
                </p>
                <p>
                  At CodeCortex, we believe that web development services should
                  be accessible and affordable for all businesses. That's why we
                  offer competitive pricing and flexible engagement models that
                  are designed to meet your budget and business needs.
                </p>
                <p>
                  Our approach is personalized, meaning that we work closely
                  with our clients to understand their unique requirements and
                  develop customized solutions tailored to their specific needs.
                  Whether you need a website that's optimized for user
                  experience and search engines, an e-commerce solution that can
                  help you sell your products and services online, or a mobile
                  application that engages your audience and delivers results,
                  we've got you covered.
                </p>
                <p>
                  Customer satisfaction is our top priority, and we're dedicated
                  to providing exceptional customer service and support
                  throughout the development process and beyond. Our team is
                  here to help you achieve your business goals and drive growth
                  for your company.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src="/images/about/about-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
