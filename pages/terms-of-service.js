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
            <h4>Terms of Service</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Terms of Service</li>
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
                    This Terms of Service was last updated on September 1, 2022.
                  </i>
                </p>
                <h2>CodeCortex Terms of Service</h2>
                <p>
                  Welcome to CodeCortex, the leading platform for all your
                  coding needs. By using our services, you agree to comply with
                  the terms and conditions outlined below. If you do not agree
                  with these terms, please do not use our platform.
                </p>

                <h4>Intellectual Property Rights</h4>
                <p>
                  All content on CodeCortex, including but not limited to text,
                  graphics, logos, icons, images, and software, is the property
                  of CodeCortex or its content providers and is protected by
                  international copyright laws.
                </p>

                <h4>Privacy Policy</h4>
                <p>
                  We take your privacy seriously at CodeCortex. Please refer to
                  our Privacy Policy page for more information about how we
                  collect, use, and disclose your personal information.
                </p>

                <h4>User Conduct</h4>
                <p>
                  As a user of CodeCortex, you agree to abide by the following
                  rules of conduct:
                </p>
                <ul>
                  <li>
                    Do not use CodeCortex to violate any laws or regulations.
                  </li>
                  <li>
                    Do not engage in any activity that interferes with or
                    disrupts CodeCortex's services or servers.
                  </li>
                  <li>
                    Do not upload or transmit any harmful or malicious content,
                    including viruses, malware, or spam.
                  </li>
                  <li>
                    Do not use CodeCortex to harass, intimidate, or threaten any
                    other user or individual.
                  </li>
                  <li>
                    Do not use CodeCortex to advertise or promote any products
                    or services without our consent.
                  </li>
                </ul>

                <h4>Disclaimer of Warranties</h4>
                <p>
                  CodeCortex makes no warranties or representations of any kind,
                  whether express or implied, regarding the accuracy,
                  reliability, or suitability of the content and services
                  provided on our platform. We do not guarantee that our
                  services will be uninterrupted, timely, or error-free, and we
                  are not responsible for any loss or damage incurred as a
                  result of using our platform.
                </p>

                <h4>Limitation of Liability</h4>
                <p>
                  Under no circumstances shall CodeCortex be liable for any
                  direct, indirect, incidental, special, or consequential
                  damages arising from the use or inability to use our platform,
                  even if we have been advised of the possibility of such
                  damages. This includes but is not limited to damages for loss
                  of profits, goodwill, use, data, or other intangible losses.
                </p>

                <h4>Indemnification</h4>
                <p>
                  You agree to indemnify and hold CodeCortex, its affiliates,
                  officers, agents, and employees harmless from any claims,
                  damages, or expenses arising from your use of our platform or
                  any violation of these terms of service.
                </p>

                <h4>Changes to the Terms of Service</h4>
                <p>
                  We reserve the right to modify these terms of service at any
                  time. Any changes will be effective immediately upon posting
                  to our platform. Your continued use of CodeCortex after the
                  posting of any changes indicates your acceptance of the
                  modified terms.
                </p>

                <h4>Contact Us</h4>
                <p>
                  If you have any questions or concerns about these terms of
                  service, please contact us at support@codecortex.com.
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
