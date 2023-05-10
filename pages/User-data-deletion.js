import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function TermsOfService() {
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
            <h4>User Data Deletion for Revelation App</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>User Data Deletion for Revelation App</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="terms-of-service-content">
                <div className="terms-of-service-image">
                  <img src="/images/terms-of-service.jpg" alt="image" />
                </div>
                <p>
                  <i>
                    This User Data Deletion was last updated on September 1,
                    2022.
                  </i>
                </p>
                <h2>5 Steps to delete your data</h2>

                <p>
                  At Revelation, we value your privacy and understand the
                  importance of giving you control over your personal
                  information. This User Data Deletion page outlines the process
                  for requesting the deletion of your personal data from our
                  app.
                </p>
                <p>
                  Please read the following instructions carefully before
                  submitting your data deletion request:
                </p>
                <h4>1. Log in to your Revelation account.</h4>
                <p>
                  Ensure you are logged in to your Revelation account before
                  initiating the data deletion process. If you have multiple
                  accounts associated with Revelation, please log in to each
                  account separately to request data deletion for each one.
                </p>

                <h4>2. Review your account information.</h4>
                <p>
                  Take a moment to review the personal information stored in
                  your account. This may include your name, email address,
                  profile picture, transaction history, and other related data.
                </p>

                <h4>3. Submit your data deletion request.</h4>
                <p>
                  To request the deletion of your personal data, click the
                  "Delete My Data" button below. You will be prompted to confirm
                  your request. Keep in mind that this action is irreversible,
                  and all your personal information and transaction history will
                  be permanently removed from our system.
                </p>
                <p>[Delete My Data]</p>
                <h4>4. Allow time for processing.</h4>
                <p>
                  Please allow up to 3 days for your data deletion request to be
                  processed. During this period, our team will verify your
                  request and ensure that all necessary steps have been taken to
                  comply with applicable laws and regulations.
                </p>
                <h4>5. Confirmation of data deletion.</h4>
                <p>
                  Once your data has been successfully deleted from our system,
                  you will receive an email confirmation. If you do not receive
                  this confirmation within 30 days of submitting your request,
                  please contact our support team for assistance.
                </p>
                <p>Important Note:</p>
                <p>
                  Deleting your personal data from Revelation will result in the
                  permanent loss of your account, transaction history, and any
                  associated data. Please make sure you have saved any important
                  information or records before initiating the deletion process.
                </p>
                <p>
                  If you have any questions or concerns about the User Data
                  Deletion process, please do not hesitate to reach out to our
                  support team at team@codecortex.eu We are here to help
                  and ensure that your privacy is protected to the fullest
                  extent possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTO />

      <Footer />
    </>
  );
}
