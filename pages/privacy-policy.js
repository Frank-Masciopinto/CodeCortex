import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function PrivacyPolicy() {
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
            <h4>Privacy Policy</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="privacy-policy-content">
                <div className="privacy-policy-image">
                  <img src="/images/privacy-policy.jpg" alt="image" />
                </div>

                <p>
                  <i>
                    This Privacy Policy was last updated on September 1, 2020.
                  </i>
                </p>
                <h2>CodeCortex Privacy Policy</h2>
                <p>
                  At CodeCortex, we respect your privacy and are committed to
                  protecting your personal information. This privacy policy
                  explains how we collect, use, and disclose your information
                  when you use our services.
                </p>

                <h4>Information We Collect</h4>
                <p>
                  We may collect the following types of information when you use
                  our platform:
                </p>
                <ul>
                  <li>
                    Personal Information: This includes your name, email
                    address, and other contact information you provide when you
                    register for an account with us.
                  </li>
                  <li>
                    Usage Information: This includes information about your
                    interactions with our platform, such as your search queries,
                    browsing history, and content preferences.
                  </li>
                  <li>
                    Device Information: This includes information about the
                    device you use to access our platform, such as your IP
                    address, browser type, and operating system.
                  </li>
                  <li>
                    Cookies and Tracking Technologies: We use cookies and other
                    tracking technologies to collect information about your use
                    of our platform and to personalize your experience.
                  </li>
                </ul>

                <h4>How We Use Your Information</h4>
                <p>We may use your information for the following purposes:</p>
                <ul>
                  <li>To provide and improve our platform</li>
                  <li>To personalize your experience</li>
                  <li>
                    To communicate with you about our services and updates
                  </li>
                  <li>To prevent fraud and illegal activity</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h4>Disclosure of Your Information</h4>
                <p>
                  We may disclose your information to the following parties:
                </p>
                <ul>
                  <li>
                    Service Providers: We may share your information with
                    third-party service providers who help us operate our
                    platform and provide our services.
                  </li>
                  <li>
                    Legal Authorities: We may disclose your information to law
                    enforcement authorities or other government officials if
                    required by law.
                  </li>
                  <li>
                    Other Users: If you choose to share your information or
                    content publicly on our platform, it may be visible to other
                    users.
                  </li>
                </ul>

                <h4>Security of Your Information</h4>
                <p>
                  We take appropriate measures to protect your information from
                  unauthorized access, alteration, or disclosure. However, no
                  system can be completely secure, and we cannot guarantee the
                  security of your information.
                </p>

                <h4>Changes to the Privacy Policy</h4>
                <p>
                  We reserve the right to modify this privacy policy at any
                  time. Any changes will be effective immediately upon posting
                  to our platform. Your continued use of CodeCortex after the
                  posting of any changes indicates your acceptance of the
                  modified policy.
                </p>

                <h4>Contact Us</h4>
                <p>
                  If you have any questions or concerns about this privacy
                  policy, please contact us at privacy@codecortex.com.
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
