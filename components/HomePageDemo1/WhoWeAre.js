import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about/about.png"
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
                <h3>
                  We help <b>transform brands into trusted market leaders</b> by
                  using strategy, data, commerce and technology.
                </h3>
                <p></p>
                <p>
                  Since 2010, we've been relentlessly committed to pushing the
                  boundaries of performance. Powered by cutting-edge technology,
                  we provide comprehensive solutions to startups with
                  multi-million dollar funding, as well as small and
                  medium-sized enterprises. Our passion for art and culture also
                  inspires us, and our presence in Rome, Italy is a testament to
                  our global reach.
                </p>
                <div className="about-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
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
