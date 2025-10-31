import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

{/*const stats = [
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
];*/}

export default function Home() {
  const aboutRef = useRef(null);
  const valuesRef = useRef(null);
  const advantageRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-nav">
              <button onClick={() => scrollToRef(aboutRef)} className="nav-link">About Us</button>
              <button onClick={() => scrollToRef(valuesRef)} className="nav-link">Our Values</button>
              <button onClick={() => scrollToRef(advantageRef)} className="nav-link">UC Advantage</button>
              <button onClick={() => scrollToRef(resumeRef)} className="nav-link">Submit Resume</button>
            </div>
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

      {/* Our Story */}
      <section ref={aboutRef} className="section">
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


      {/* Values and Ethics Section */}
      <section ref={valuesRef} id="values" className="section values-section">
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
              <h3>Do Not Solicit Business</h3>
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

      {/* Resume Posting Section */}
      <section ref={resumeRef} className="section resume-posting-section">
        <div className="container">
          <div className="resume-posting-content">
            <div className="resume-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h2>Submit Your Resume</h2>
            <p>Ready to take the next step in your career? Send us your resume and let us help you find your dream job.</p>
            <a href="mailto:resumes@uniconindia.com?subject=Resume Submission - [Your Name]" className="btn btn-primary resume-btn">
              <i className="fas fa-envelope"></i>
              Send Resume via Email
            </a>
          </div>
        </div>
      </section>

      {/* What is Intellectual Capital Section */}
      <section ref={advantageRef} className="section intellectual-capital-section">
        <div className="container">
          <div className="section-header">
            <h2>The UC Advantage</h2>
          </div>
          <div className="intellectual-capital-content">
            <div className="ic-text">
              <p>
                We are "Individual Sensitive". We address your specific preferences, dreams and project to our clients positively.
                We maintain complete confidentiality at all ends and your profile will be sent to our clients only with your prior consent. We are often engaged in opportunities, which are not advertised and are inaccessible to competition. This gives you exclusive access to new avenues.
              </p>
              <p>
                Unique connections have expertise in managing senior management professionals' placements across all functional areas with focused expertise. We are a process driven organization ensuring high professional standards.
                We maintain consistent follow-up with our clients and keep you informed of the progress at all stages. We ensure smooth transition and successful integration with the new assignment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 