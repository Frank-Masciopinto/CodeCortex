import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default function Testimonials() {
  return (
    <>
      <Navbar />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-5.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Testimonials</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="testimonials-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>TESTIMONIALS</span>
            <h2>Our Client Feedbacks</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <p>
                  "Working with CodeCortex was a pleasure. They helped us
                  develop a custom e-commerce platform that was tailored to our
                  specific needs. The team was professional, responsive, and
                  went above and beyond to ensure that we were satisfied with
                  the final product."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-4.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Bradly Doe, <span>Founder of Medizo</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <p>
                  "We needed a mobile application that could handle complex
                  calculations and data analysis. CodeCortex not only delivered
                  an exceptional product but also provided valuable guidance and
                  support throughout the development process."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-6.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Jennifer Smith, <span>Spix Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <p>
                  "We were impressed with CodeCortex's attention to detail and
                  expertise in blockchain development. They helped us develop a
                  custom blockchain solution that exceeded our expectations and
                  improved the efficiency of our operations."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-8.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Jane Ronan, <span>Lebu Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <p>
                  "CodeCortex's team of developers is highly skilled and
                  knowledgeable. They helped us develop a robust web application
                  that can handle high volumes of traffic and data. The project
                  was completed on time and within budget, and we couldn't be
                  happier with the results."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-5.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Daniel John, <span>Solit Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <p>
                  "CodeCortex delivered exceptional results when developing our
                  SaaS platform. They provided valuable insights and suggestions
                  throughout the development process and were always available
                  to answer our questions and provide support."
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-7.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Sarp Karahan, <span>Benzo Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <p>
                  "CodeCortex truly blew our minds with their AI-powered
                  wizardry. We presented them with a challenge, and they
                  transformed it into a sleek and effective solution. Their team
                  was a blast to work with and delivered on all fronts - from
                  timeliness to affordability. We can't recommend them enough!"
                </p>

                <div className="info-item-box">
                  <img
                    src="/images/testimonials/testimonials-1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <h4>
                    Maria Rodriguez, Director of Research and Development,{" "}
                    <span>MNO Innovations</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
