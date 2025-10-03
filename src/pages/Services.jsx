import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';


const Services = () => {

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">

          <h1>Our Services</h1>
          <p>Delivering exceptional talent acquisition solutions since 1996</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview-section">
        <div className="container">
          <div className="company-overview">
            <div className="overview-content">
              <div className="overview-text">
                <p>Intense competitive environment, emerging technologies, and the way business is done, will plough through the global marketplace in the new millennium. To master the new paradigm, the real asset that our partners leverage, is intellectual capital.</p>
                <p>Unique Connections offers wide variety of recruitment and staffing services of top notch professionals to our Clients, who may forge a long term alliance with us.</p>
                <p>We understand your requirements clearly and present you very best of professionals. Our executive/ personnel search assignment start with a thorough briefing of the macro elements of the organization and position. We maintain close contact with our clients through the search cycle to ensure a close match to their requirements brief. If need be, key publications are used to maximise advertised recruitment strategies. to our partners and IT professionals.</p>
                <p>Our consultants and research staff speak to hundreds of professionals each week, getting referrals and identifying professionals. We have a structured methodology to store and match requirements with the professionals' expertise. Our business advisory panel carries out key areas of hiring process by evaluating technical expertise, communication and interpersonal skills.</p>
                <p>We verify the background, and forward only credible candidates. We also perform extensive background checks on specific requests.</p>
                <p className="highlight">Unique Connections invites global organizations and IT Professionals to join hands in this unique "People-Centric" business partnership model.</p>
              </div>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );

};

export default Services;

