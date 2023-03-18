import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Layout/Navbar'
import CTO from '@/components/Common/CTO'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Layout/Footer'

export default function Projects() {
  return (
    <>
      <Navbar />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-3.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Projects</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projects-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>PROJECTS</span>
            <h2>
              Our Latest <b>Incredible</b> Client&apos;s Projects
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/messaging-app">
                    <a>
                      <img
                        src="/images/projects-two/projects-1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Animation</a>
                  </Link>
                  <h3>
                    <Link href="/projects/3D-Animation">
                      <a>3D Animation</a>
                    </Link>
                  </h3>
                  <Link href="/projects/3D-Animation">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>

              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/banking-software">
                    <a>
                      <img
                        src="/images/projects-two/projects-2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Software</a>
                  </Link>
                  <h3>
                    <Link href="/projects/banking-software">
                      <a>Online Banking Software</a>
                    </Link>
                  </h3>
                  <Link href="/projects/banking-software">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/Cashier-Software">
                    <a>
                      <img
                        src="/images/projects-two/projects-3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Web Design</a>
                  </Link>
                  <h3>
                    <Link href="/projects/Cashier-Software">
                      <a>Cashier Software</a>
                    </Link>
                  </h3>
                  <Link href="/projects/Cashier-Software">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/messaging-app">
                    <a>
                      <img
                        src="/images/projects-two/projects-4.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Mobile App</a>
                  </Link>
                  <h3>
                    <Link href="/projects/messaging-app">
                      <a>Messaging App</a>
                    </Link>
                  </h3>
                  <Link href="/projects/messaging-app">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>

              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/analytics-software">
                    <a>
                      <img
                        src="/images/projects-two/projects-5.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#">
                    <a className="category">Development</a>
                  </Link>
                  <h3>
                    <Link href="/projects/analytics-software">
                      <a>Analytics SAAS</a>
                    </Link>
                  </h3>
                  <Link href="/projects/analytics-software">
                    <a className="projects-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-bg-shape-1">
          <img src="/images/projects/projects-bg-shape.png" alt="image" />
        </div>
      </div>

      <CTO />

      <ContactForm />

      <Footer />
    </>
  )
}
