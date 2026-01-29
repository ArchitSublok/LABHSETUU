import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>We are passionate about building great web experiences.</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality software solutions that empower individuals and businesses to achieve their digital goals.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in innovative technology and a trusted partner in digital transformation.
          </p>
        </div>

        <div className="about-section team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/images/member1.jpg" alt="Team Member 1" />
              <h3>Alice Johnson</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="/images/member2.jpg" alt="Team Member 2" />
              <h3>Bob Smith</h3>
              <p>CTO</p>
            </div>
            {/* Add more members as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
