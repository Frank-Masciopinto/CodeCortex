import React from "react";
import Link from "next/link";

const BlogGrid = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE</span>
            <h2>
              Read Our Blog To Get All Recent Tech <b>News</b>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/building-scalable-secure-API">
                        <a>
                          <img src="/images/blog/blog-1.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">9th July, 2022</div>
                      <h3>
                        <Link href="/blog/building-scalable-secure-API">
                          <a>Building a Scalable and Secure API</a>
                        </Link>
                      </h3>
                      <p>
                        Best Practices for Streamlining Your Development Process
                        and Protecting Your User Data.
                      </p>
                      <Link href="/blog/building-scalable-secure-API">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay="890"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/choosing-the-right-mobile-app-development-company">
                        <a>
                          <img src="/images/blog/blog-2.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">7th July, 2022</div>
                      <h3>
                        <Link href="/blog/choosing-the-right-mobile-app-development-company">
                          <a>
                            5 Things to Look for in a Mobile App Development
                            Company
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Ready to choose the best mobile app development company?
                        Check out these five crucial factors to consider before
                        you make a decision and potentially waste your money!
                      </p>
                      <Link href="/blog/choosing-the-right-mobile-app-development-company">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/7-principles-of-effective-user-interface-design">
                        <a>
                          <img src="/images/blog/blog-3.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">1st January, 2023</div>
                      <h3>
                        <Link href="/blog/7-principles-of-effective-user-interface-design">
                          <a>7 Principles of Effective User Interface Design</a>
                        </Link>
                      </h3>
                      <p>
                      Design interfaces that users love with these 7
                        principles.
                      </p>
                      <Link href="/blog/7-principles-of-effective-user-interface-design">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/single-blog">
                        <a>
                          <img src="/images/blog/blog-4.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">7th July, 2022</div>
                      <h3>
                        <Link href="/blog/single-blog">
                          <a>
                            Tech Products That Makes Its Easier To Stay At Home
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet conset sadipscing elitr sed
                        diam nonumy eir m od tempor invidunt ut labore.
                      </p>
                      <Link href="/blog/single-blog">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/single-blog">
                        <a>
                          <img src="/images/blog/blog-5.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">7th July, 2022</div>
                      <h3>
                        <Link href="/blog/single-blog">
                          <a>
                            Necessity May Give Us Your Best Virtual Court System
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet conset sadipscing elitr sed
                        diam nonumy eir m od tempor invidunt ut labore.
                      </p>
                      <Link href="/blog/single-blog">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/single-blog">
                        <a>
                          <img src="/images/blog/blog-6.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">7th July, 2022</div>
                      <h3>
                        <Link href="/blog/single-blog">
                          <a>
                            How Technology Helps In The Education System In The
                            World
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet conset sadipscing elitr sed
                        diam nonumy eir m od tempor invidunt ut labore.
                      </p>
                      <Link href="/blog/single-blog">
                        <a className="blog-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-shape-1">
          <img src="/images/blog/blog-shape-1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
