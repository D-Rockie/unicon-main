import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { value: '1000+', label: 'Candidates Placed' },
  { value: '200+', label: 'Companies Served' },
  { value: '95%', label: 'Success Rate' },
  { value: '24/7', label: 'Support' },
];

const services = [
  {
    icon: 'fa-briefcase',
    title: 'Permanent Staffing',
    description: 'Find the perfect long-term employees for your business with our comprehensive staffing solutions.'
  },
  {
    icon: 'fa-clock',
    title: 'Temporary Staffing',
    description: 'Flexible staffing solutions to meet your short-term and seasonal workforce needs.'
  },
  {
    icon: 'fa-search',
    title: 'Executive Search',
    description: 'Connect with top-tier executive talent to lead your organization to success.'
  },
  {
    icon: 'fa-building',
    title: 'HR Consulting',
    description: 'Expert HR services to optimize your workforce and improve organizational performance.'
  },
];

const testimonials = [
  {
    quote: "Unique Connections helped us find the perfect candidate for our senior developer position. Their process was efficient and professional.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp"
  },
  {
    quote: "The team at Unique Connections truly understands the job market. They matched me with a company that aligns perfectly with my career goals.",
    author: "Michael Chen",
    role: "Senior Developer"
  },
  {
    quote: "Outstanding service! They found us three excellent candidates within a week when we were in a tight spot.",
    author: "Emily Rodriguez",
    role: "HR Director, InnovateX"
  }
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">

            <div className="hero-eyebrow">People • Process • Performance</div>
            <h1 className="hero-title">Enhancing <span className="gradient-text">Intellectual</span> <span className="gradient-text">Capital</span></h1>
            <p className="hero-subtitle">Your trusted partner who provide its customers a long-term solution to enhance and nurture their intellectual capital.</p>
            <div className="hero-cta">
              <Link to="/jobs" className="btn btn-primary">Browse Jobs</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              <img 
                src="/src/assets/images/mainlogo.png" 

                alt="Recruitment illustration" 
                className="hero-img"
              />
            </div>
          </div>
        </div>

        {/*<a href="#values" className="scroll-indicator" aria-label="Scroll to values section">
          <span className="mouse"></span>
          <span className="arrow">↓</span>
        </a>*/}
      </section>

      
      {/* Values and Ethics Section */}
      <section id="values" className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values & Ethics</h2>
            <p>The principles that guide our people-centric approach</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <h3>Long-Term Relationship</h3>
              <p>We seek to establish a long-term relationship with our clients and pledge to uphold the highest ethical values and integrity.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Confidentiality</h3>
              <p>We treat all the details with regard to Projects, customers and other information received during the course of our association with our partners in the strictest of confidence. </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Mutual Consent</h3>
              <p>Non disclosure agreement may be signed on mutual consent.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Do Not Solicit Businesess</h3>
              <p>We do not solicit business contacts with professionals employed with our clients.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to find your next opportunity?</h2>
            <p>Join thousands of professionals who found their dream jobs through Unique Connections.</p>
            <div className="cta-buttons">
              <Link to="/jobs" className="btn btn-primary">Browse Jobs</Link>

              <Link to="mailto:partnership@uniconindia.com" className="btn btn-outline">Submit Resume</Link>

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
    </div>
  );
} 