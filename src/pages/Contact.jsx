import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Reach out to us for any inquiries or to learn more about our services.</p>
        </div>
      </section>

      <div className="container">
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>

                <a href="mailto:partnership@uniconindia.com">partnership@uniconindia.com</a>
                <a href="mailto:resumes@uniconindia.com">resumes@uniconindia.com</a>
                <a href="mailto:dreams@uniconindia.com">dreams@uniconindia.com</a>

              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="icon" />
              <div>
                <h3>Phone</h3>

                <span>+ 91 44 2495 2962</span>
                <span>+91 44 2493 3368</span>
                <span>Fax: + 91 44 2495 3023</span>
6
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <address>
                  Unique Connections<br />

                  New No: 89/1, Old No: 48/1,<br />
                  R K Mutt Road, Mandaveli<br />
                  Chennai - 600 028, Tamil Nadu<br /> 
                  India

                </address>
              </div>
            </div>
            
            <div className="contact-item business-hours">
              <div className="business-hours-content">
                <h3>Business Hours</h3>
                <div className="hours-grid">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="social-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://linkedin.com/company/unique-connections" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/uniqueconnects" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://facebook.com/uniqueconnections" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
