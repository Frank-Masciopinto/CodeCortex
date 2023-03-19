import React from "react";

const CTO = () => {
  return (
    <>
      <div className="overview-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Chat With Us</h3>
                <span>
                  <a href="https://page.line.me/814inpab">Line @CodeCortex</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Email Us</h3>
                <span>
                  <a href="mailto:team@codecortex.eu">team@codecortex.eu</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Tech Support</h3>
                <span>
                  <a href="tel:0187921631">+60187921631</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Visit Us</h3>
                <span>401 Ryland St STE 200A
Reno, NV 89502</span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTO;
