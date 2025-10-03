import React, { useState, useEffect } from "react"
import "./Jobs.css"

export default function Jobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  // Fetch jobs from JSON file
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        const response = await fetch('/jobs.json')
        
        if (!response.ok) {
          throw new Error('Failed to load jobs')
        }
        
        const data = await response.json()
        setJobs(data)
      } catch (err) {
        console.error('Error loading jobs:', err)
        setError('Failed to load job listings. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Format date

  const formatDate = (dateString) => {
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    } catch (error) {
      console.warn('Invalid date format:', dateString)
      return 'Date not available'
    }
  }


  if (loading) {
    return (
      <div className="jobs-container">
        <div className="loading">Loading current jobs...</div>

      </div>
    )
  }

  if (error) {
    return (
      <div className="jobs-container">
        <div className="error-message">{error}</div>
      </div>
    )
  }

  return (

    <>
      {/* Hero Section */}
      <section className="jobs-hero">
        <div className="container">
          <h1>Current Jobs</h1>
          <p>Explore exciting career opportunities at Unique Connections and find your next role.</p>
        </div>
      </section>

      <div className="jobs-container">
        <div className="jobs-header">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search jobs by title, description, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

      {filteredJobs.length === 0 ? (
        <div className="no-results">

          {searchTerm ? 'No jobs match your search criteria.' : 'No job openings at the moment. Please check back later.'}
        </div>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">

              <div className="job-header">
                <h2 className="job-title">{job.title}</h2>
                <div className="job-meta-tags">
                  <span className="job-location">
                    <i className="fas fa-map-marker-alt"></i> {job.location}
                  </span>
                  <span className="job-type">
                    <i className="fas fa-briefcase"></i> {job.type}
                  </span>
                </div>
              </div>
              
              <p className="job-description">{job.description}</p>
              
              {job.requirements && job.requirements.length > 0 && (
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle"></i> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="job-footer">
                <span className="job-date">Posted: {formatDate(job.posted_date)}</span>
                <button 
                  className="apply-button"
                  onClick={() => {
                    const subject = `Job Application: ${job.title}`
                    const body = `Dear Hiring Manager,\n\nI am writing to apply for the ${job.title} position.\n\n[Your message here]\n\nBest regards,\n[Your Name]\n[Your Contact Information]`
                    window.location.href = `mailto:partnership@uniconindia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    </>

  )
}
