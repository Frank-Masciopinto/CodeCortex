import React from "react";

const TeamMembers = () => {
  return (
    <>
      <div className="team-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <span>Our Team of Digital Superheroes</span>
            <h2>The League of Extraordinary Coders</h2>
            <p>
              Ladies and gentlemen, let me introduce you to our team of code
              wizards and digital gurus. They're like the Avengers, but instead
              of fighting aliens, they're fighting bugs and glitches in our
              clients' software.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <img src="/images/team/team-1.png" alt="image" />
                </div>
                <div className="team-content">
                  <h3>Francesco Masciopinto</h3>
                  <span>President & CEO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <img src="/images/team/team-3.png" alt="image" />
                </div>
                <div className="team-content">
                  <h3>Jems Rodrigez</h3>
                  <span>Scrum Master</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <img src="/images/team/team-2.png" alt="image" />
                </div>
                <div className="team-content">
                  <h3>Jennifer Walter</h3>
                  <span>Lead Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <img src="/images/team/team-4.png" alt="image" />
                </div>
                <div className="team-content">
                  <h3>Deren Johnson</h3>
                  <span>Senior Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <img src="/images/team/team-5.png" alt="image" />
                </div>
                <div className="team-content">
                  <h3>John Carahan</h3>
                  <span>Senior IT Consultant</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <img src="/images/team/team-6.png" alt="image" />
                </div>
                <div className="team-content">
                  <h3>Jeremy Spencer</h3>
                  <span>Human Resource Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <img src="/images/team/team-7.png" alt="image" />
                </div>
                <div className="team-content">
                  <h3>Bella Watson</h3>
                  <span>Digital Marketer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <img src="/images/team/team-8.png" alt="image" />
                </div>
                <div className="team-content">
                  <h3>Jonny Hopper</h3>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-shape">
          <img src="/images/team/line-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
