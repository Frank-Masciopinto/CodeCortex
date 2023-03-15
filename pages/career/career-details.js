import React from 'react'
import Link from 'next/link'
import Navbar from "@/components/Layout/Navbar";
import CTO from '@/components/Common/CTO'
import CareerDetailsContent from '@/components/Career/CareerDetailsContent'
import Footer from '@/components/Layout/Footer'

export default function CareerDetails() {
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
            <h2>Career Details</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Career Details</li>
            </ul>
          </div>
        </div>
      </div>

      <CareerDetailsContent />

      <CTO />

      <Footer />
    </>
  )
}
