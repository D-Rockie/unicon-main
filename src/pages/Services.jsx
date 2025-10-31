import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';



export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">

          <h1>Our Services</h1>
          <p>Delivering exceptional talent acquisition solutions since 1996</p>
        </div>
      </section>


      {/* Our Services */}
            <section className="section company-overview-section">
              <div className="container">
                <div className="section-header">
                  <h2>Our Services</h2>
                  <p>Comprehensive recruitment and staffing solutions tailored to your needs</p>
                </div>
                <div className="company-overview">
                  <div className="overview-content">
                    <div className="overview-text">
                      <p>In an intense competitive environment, emerging technologies, and evolving business landscape, the key to success lies in leveraging intellectual capital. At Unique Connections, we understand that the real asset our partners leverage is the talent and expertise of their people.</p>
                      <p>We offer a comprehensive range of recruitment and staffing services, providing top-tier professionals to organizations that seek to build long-term partnerships with us. Our commitment is to deliver excellence in human capital solutions.</p>
                      <p>Our executive and personnel search process begins with a thorough understanding of your organizational requirements and position specifications. We maintain continuous communication throughout the search cycle to ensure perfect alignment with your needs. When necessary, we leverage industry publications and extensive networks to maximize our recruitment strategies.</p>
                      <p>Our experienced consultants and research team connect with hundreds of professionals weekly, building an extensive referral network and identifying exceptional talent. We employ sophisticated methodologies to match requirements with professional expertise, ensuring the highest quality placements.</p>
                      <p>Every candidate undergoes rigorous background verification and screening processes. Our business advisory panel evaluates technical expertise, communication skills, and cultural fit to ensure only the most qualified professionals are presented to our clients.</p>
                      <p className="highlight">Unique Connections invites global organizations and IT professionals to join our unique "People-Centric" business partnership model, where success is built through the strength of human connections and intellectual capital.</p>
                    </div>
                    <div className="cta-buttons">
                      <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                      <Link to="/jobs" className="btn btn-outline">View Available Jobs</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* What is Intellectual Capital Section */}
      <section className="section intellectual-capital-section">
        <div className="container">
          <div className="section-header">
            <h2>What is Intellectual Capital?</h2>
            <p>Understanding the foundation of organizational success</p>
          </div>
          <div className="intellectual-capital-content">
            <div className="ic-text">
              <p>
                Intellectual capital is knowledge base of any organization irrespective of size and is a major contributor of revenues and profit. This knowledge base can be effectively converted as profit. This includes inventions, ideas, general know-how, design processes, software applications, communication design and publications, the individual capabilities, knowledge, skills, experience and problem solving abilities that reside in the people in an organization.
              </p>
              <p>
                In an intense competitive environment with emerging technologies, intellectual capital has become the real 
                asset that organizations leverage to master new paradigms and stay ahead in the global marketplace.
              </p>
            </div>

            <div className="ic-divider"></div>

            <div className="ic-why-section">
              <h3>Why Enhance Intellectual Capital?</h3>
              <div className="why-content">
                <p>
                Intellectual Capital comprises Intangible Assets to include Human Centered assets, Intellectual Property, Infrastructure and Intellectual Assets. In some organizations, notably service organizations and those that depend upon information technology, Intangible Assets now outweigh tangibles in their importance to the organization.
                </p>
                <p>
                Indeed, possession of tangible Assets such as machinery, buildings, Infrastructure and cash is only leveraged according to the nature and quality of Intellectual Capital in the organization. What is important in this new view is not just the new categories of value that have emerged, but the relationships and dependencies between them, threaded together with the flow of knowledge.
                </p>
                <p>
                It all precipitates down to the nature of corporate knowledge and memory and how it will be used in the next millennium. The challenge for organizations is to build, protect and enhance intellectual capital.
                </p>
              </div>
            </div>

            <div className="ic-divider"></div>

            <div className="ic-role-section">
              <h3>What Role Does Unique Connections Play in This Scenario?</h3>
              <div className="role-content">
                <p>
                Intellectual capital can't be bought off the shelf. We have process and methodologies to attract high quality human centered assets. Unique connections provides its customers a long-term solution to enhance and nurture their intellectual capital.
                </p>
              </div>
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

      {/* Recruiting Process Section */}
      <section className="section recruiting-process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Recruiting Process</h2>
            <p>How we connect exceptional talent with forward-thinking companies</p>
          </div>
          <div className="process-content">
            <p className="process-intro">Our comprehensive recruitment methodology ensures we identify and present only the most qualified candidates for your specific requirements:</p>

            <div className="process-steps">
              <div className="process-step">
                <h3>Candidate Identification</h3>
                <p>We identify potential candidates from our vast databank of professionals across various industries and specializations. Our extensive network and continuous talent mapping ensure we have access to top-tier candidates when you need them.</p>
              </div>

              <div className="process-step">
                <h3>Rigorous Screening</h3>
                <p>Every candidate undergoes careful screening against your specific requirements before being presented. We conduct thorough background checks, reference verification, and preliminary assessments to ensure only qualified professionals reach your consideration.</p>
              </div>

              <div className="process-step">
                <h3>Advanced Matching Technology</h3>
                <p>Our specially designed custom software aids us in matching your requirements faster and more accurately. Through carefully applied algorithms and matching methodologies, we assess overall professional strengths and identify candidates who best fit your company culture and technical needs.</p>
              </div>
            </div>

            <p className="process-conclusion">This meticulous process ensures that every placement we make contributes to your organization's success and helps professionals achieve their career objectives. We maintain the highest standards throughout to build lasting partnerships based on trust and results.</p>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      {/*<section className="section values-section">
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
              <h3>Individual Sensitive</h3>
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

      {/* Resume Posting Section */}
      <section className="section resume-posting-section">
        <div className="container">
          <div className="resume-posting-content">
            <div className="resume-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h2>Submit Your Resume</h2>
            <p>Looking for new opportunities? Send us your resume and join our exclusive talent network.</p>
            <a href="mailto:resumes@uniconindia.com?subject=Resume Submission - [Your Name]" className="btn btn-primary resume-btn">
              <i className="fas fa-envelope"></i>
               Send Resume via Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
