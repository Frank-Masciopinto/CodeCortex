import React from "react";
import Link from "next/link";

const PricingTable = () => {
  return (
    <>
      <div className="pricing-area with-black-background pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>PRICING</span>
            <h2>
              <b>Minimum budget size</b>
            </h2>
            <p>
              Please keep in mind that these are just example figures and
              minimum budget requirements can vary depending on the complexity
              and scope of the project.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h3>Custom Web Development</h3>
                <div className="price">
                  $10,000 <span></span>
                </div>
                <p>
                  From simple websites to complex SaaS applications, our team of
                  expert developers has the experience and expertise to deliver
                  exceptional results.
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Extensive testing to
                    ensure top-notch performance and security
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Integration with
                    third-party systems and services
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> 30-day guarantee, to
                    ensure your Web App runs smoothly
                  </li>
                </ul>
                <div className="pricing-btn">
                  <Link href="/contact">
                    <a className="default-btn">Enquiry</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1100"
                data-aos-once="true"
              >
                <h3>Mobile Development</h3>
                <div className="price">
                  $15,000 <span></span>
                </div>
                <p>
                  We specialize in cross-platform mobile app development,
                  leveraging the latest technologies to create fast, efficient,
                  and intuitive apps that meet your business needs.
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Design and development of
                    both iOS and Android apps
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Integration with various
                    mobile device features and sensors
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Implementation of push
                    notifications and in-app messaging
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Ongoing updates and
                    maintenance, including a 30-day guarantee, to keep your app
                    running smoothly
                  </li>
                </ul>
                <div className="pricing-btn">
                  <div className="pricing-btn">
                    <Link href="/contact">
                      <a className="default-btn">Enquiry</a>
                    </Link>
                  </div>
                </div>
                <div className="most-popular">
                  <span>Most Popular</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <h3>Blockchain Development</h3>
                <div className="price">
                  $30,000 <span></span>
                </div>
                <p>
                  Customized blockchain solutions tailored to your unique
                  business needs
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Smart contract development
                    and deployment for decentralized applications (DApps)
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Integration with various
                    blockchain protocols and platforms
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Consultation and advisory
                    services to help you determine the best blockchain solution
                    for your business needs, including feasibility studies and
                    ROI analysis.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Ongoing support and
                    maintenance, including a 30-day guarantee, to ensure your
                    blockchain solution is running smoothly
                  </li>
                </ul>
                <div className="pricing-btn">
                  <div className="pricing-btn">
                    <Link href="/contact">
                      <a className="default-btn">Choose Plan</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Image */}
        <div className="pricing-bg-shape-1">
          <img src="/images/pricing/pricing-bg-shape.png" alt="image" />
        </div>
        <div className="pricing-shape-1">
          <img src="/images/pricing/pricing-shape-1.png" alt="image" />
        </div>
        <div className="pricing-shape-2">
          <img src="/images/pricing/pricing-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PricingTable;
