import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';



export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About <span className="gradient-text">Unique Connections</span></h1>
            <p className="lead">Bridging the gap between exceptional talent and forward-thinking companies since 1996.</p>

          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-content">

              <h2>About Us</h2>
              <p>Unique Connections, established in 1996, provides global organizations with high quality resourcing and staffing services in all areas of Information Technology. We are committed to achieve greater success through partnership with the corporate world, there by enabling our partners to staff top notch professionals. We specialize in enhancing the intellectual capital of our partner organizations.</p>
              <p>We enable professionals to reach their Dream Jobs thereby helping them achieve their career objectives. Unique Connections offers wide variety of services to our partners and IT professionals. Unique Connections Invites global organizations and IT Professionals to join hands in this unique "People-Centric" business partnership model.</p>
            </div>
            

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">

                <i className="fas fa-users"></i>
              </div>
              <h3>Individual sensitive</h3>
              <p>We address your specific preferences, dreams and project to our clients positively.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Confidentiality</h3>
              <p>We maintain complete confidentiality at all ends and your profile will be sent to our clients only with your prior consent.</p>

            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Consistent</h3>
              <p>We maintain consistent follow-up with our clients and keep you informed of the progress at all stages.</p>

            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>

              <h3>Focused Expertise</h3>
              <p>We have expertise in senior management professionals' placements across all functional areas with focused expertise.</p>

            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your journey with us?</h2>
            <p>Whether you're looking for your next career move or seeking top talent for your team, we're here to help.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/jobs" className="btn btn-outline">View Open Positions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}