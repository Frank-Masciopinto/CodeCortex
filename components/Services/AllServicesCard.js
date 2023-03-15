import React from "react";
import Link from "next/link";

const AllServicesCard = () => {
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>
            </h2>
            <p>
              We are technology solutions providing company all over the world
              doing over 40 years. lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/blockchain-development">
                    <a>
                      <img src="/images/services/services-1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/blockchain-development">
                      <a>Blockchain Development</a>
                    </Link>
                  </h3>
                  <p>
                    Find the Right Blockchain Solution for Your Business Needs{" "}
                  </p>
                  <Link href="/services/blockchain-development">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/Mobile-App-Development">
                    <a>
                      <img src="/images/services/services-2.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/Mobile-App-Development">
                      <a>Software Development</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/services/Mobile-App-Development">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/Mobile-App-Development">
                    <a>
                      <img src="/images/services/services-3.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/Mobile-App-Development">
                      <a>App Development</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/services/Mobile-App-Development">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/Mobile-App-Development">
                    <a>
                      <img src="/images/services/services-4.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/Software-Development">
                      <a>Web Development</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/services/Software-Development">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/blockchain-development">
                    <a>
                      <img src="/images/services/services-5.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/blockchain-development">
                      <a>Blockchain Development</a>
                    </Link>
                  </h3>
                  <p>
                    Trust, security, and transparency - our blockchain
                    development services deliver it all{" "}
                  </p>
                  <Link href="/services/blockchain-development">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/services/Mobile-App-Development">
                    <a>
                      <img src="/images/services/services-6.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/Mobile-App-Development">
                      <a>Product Design</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/services/Mobile-App-Development">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AllServicesCard;
