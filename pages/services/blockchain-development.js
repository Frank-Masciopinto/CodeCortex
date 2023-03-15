import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import BlockchainDevelopmentContent from "@/components/Services/BlockchainDevelopmentContent";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function ServiceDetails() {
  return (
    <>
      <Navbar />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Blockchain Development</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Services Details</li>
            </ul>
          </div>
        </div>
      </div>

      <BlockchainDevelopmentContent />

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      <CTO />

      <Footer />
    </>
  );
}
