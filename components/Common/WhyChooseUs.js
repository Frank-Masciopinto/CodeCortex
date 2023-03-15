import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>WHY CHOOSE US</span>
            <h2>
              Our web developers are the <b>crème de la crème</b>
            </h2>
            <p>Rigorously tested to meet Google's senior developer standards</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="">
                    <a>
                      <img src="/images/features/codes.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="">
                      <a>Customized Solutions</a>
                    </Link>
                  </h3>
                  <p>
                    We don't believe in one-size-fits-all solutions. That's why
                    we offer customized web development solutions that are
                    tailored to your unique business needs. By working closely
                    with you to understand your requirements, we'll deliver a
                    solution that not only meets but exceeds your expectations,
                    setting you up for success.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="">
                    <a>
                      <img src="/images/features/Google-Dev.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="">
                      <a>Google Standard</a>
                    </Link>
                  </h3>
                  <p>
                    Our team of expert developers are extensively tested to
                    ensure that they meet the same standards as a Google web
                    development senior developer interview. This means that
                    you're getting top-tier talent that is skilled, experienced,
                    and dedicated to delivering exceptional results.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="#">
                    <a>
                      <img src="/images/features/comp-price.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">
                      <a>Competitive Pricing</a>
                    </Link>
                  </h3>
                  <p>
                    We believe that high-quality web development services should
                    be accessible and affordable for all businesses. That's why
                    we offer competitive pricing and flexible engagement models
                    that are designed to meet your budget and business needs,
                    without sacrificing quality or performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="">
                    <a>
                      <img src="/images/features/30.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="">
                      <a>30-Day Satisfaction Guarantee</a>
                    </Link>
                  </h3>
                  <p>
                    We also offer 30 days of free after-sales support to ensure
                    that your solution is running smoothly and effectively. With
                    CodeCortex, you can rest assured that your investment is
                    protected, and your satisfaction is guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="choose-shape-1">
          <img src="/images/choose/choose-shape.png" alt="image" />
        </div>
        <div className="choose-shape-2">
          <img src="/images/choose/choose-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
