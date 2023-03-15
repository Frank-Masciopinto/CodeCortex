import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Layout/Navbar'
import CashierSoftwareContent from '@/components/Projects/CashierSoftwareContent'
import CTO from '@/components/Common/CTO'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Layout/Footer'

export default function ProjectsDetails() {
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
            <h2>Projects Details</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Cashier Software</li>
            </ul>
          </div>
        </div>
      </div>

      <CashierSoftwareContent />

      <CTO />

      <ContactForm />

      <Footer />
    </>
  )
}
