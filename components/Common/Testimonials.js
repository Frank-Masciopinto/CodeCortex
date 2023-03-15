import React from "react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-section-content"
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>TESTIMONIALS</span>
                <h3>
                  Some <b>Sweet Talk</b> Of Our Happy Clients
                </h3>
                <p>
                  At CodeCortex, we understand that our clients are more than
                  just customers - they're partners in our success. That's why
                  we go above and beyond to ensure that our clients feel
                  supported and valued every step of the way. We take the time
                  to understand their unique needs and challenges, and work
                  collaboratively to develop customized solutions that meet
                  their goals. We believe that our clients' success is our
                  success, and we're committed to building lasting relationships
                  that go beyond a one-time transaction. When you work with us,
                  you can expect a true partnership that is built on trust,
                  transparency, and a shared commitment to achieving your
                  business objectives.
                </p>

                <div className="testimonials-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-item"
                data-aos="fade-left"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    Working with CodeCortex was a game changer for our business.
                    Their team of developers not only helped us build a robust
                    and user-friendly SaaS platform, but they also provided
                    invaluable guidance and support throughout the entire
                    process. We couldn't be happier with the final product and
                    the exceptional service we received.
                  </p>
                  <h4>
                    Herry Hopper, <span>Finder.io Team</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    CodeCortex exceeded our expectations when it came to
                    developing our blockchain solution. Their team was
                    incredibly knowledgeable and skilled, and they worked
                    tirelessly to ensure that our project was completed on time
                    and within budget. They were also great communicators,
                    keeping us informed every step of the way. We highly
                    recommend CodeCortex for any blockchain development needs.
                  </p>
                  <h4>
                    Luis Macias, <span>CEO of Addenda</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-3.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    CodeCortex did an amazing job developing our Chrome
                    extension. They took the time to understand our vision and
                    needs, and delivered a product that was not only visually
                    appealing, but also highly functional and easy to use. Their
                    team was a pleasure to work with and we look forward to
                    partnering with them on future projects.
                  </p>
                  <h4>
                    Tim Stokely, <span>CEO of OnlyFans</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialsbg-shape">
          <img src="/images/testimonials/testimonials-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
