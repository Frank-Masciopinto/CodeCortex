import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area with-black-background pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <p>Cracking the Code for Your Online Success</p>

                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/codecortex"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCo4z9tvZOpz06i6kpkMGc_Q"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-youtube-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/codecortex/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/codecortex_eu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h3>Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a>Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/projects">
                      <a>Projects</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>Pages</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h3>Subscribe Newsletter</h3>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                  />

                  <button type="submit" className="default-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                &copy; CodeCortex is Proudly Owned by{" "}
                <a
                  href="https://www.linkedin.com/in/francesco-masciopinto-4a9664120/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Francesco Masciopinto
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="footer-shape-1">
          <img src="/images/footer/footer-shape-1.png" alt="image" />
        </div>
        <div className="footer-shape-2">
          <img src="/images/footer/footer-shape-2.png" alt="image" />
        </div>
        <div className="footer-shape-3">
          <img src="/images/footer/footer-shape-3.png" alt="image" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
