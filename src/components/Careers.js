  import React, { useState } from 'react';
  import { Send, Upload, Link as LinkIcon } from 'lucide-react';

  const Careers = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
      resume: null,
      resumeLink: '',
      resumeType: 'upload'
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
      const { name, value, files } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: files ? files[0] : value
      }));
    };

    const handleResumeTypeChange = (type) => {
      setFormData(prev => ({
        ...prev,
        resumeType: type,
        resume: null,
        resumeLink: ''
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('Sending...');

      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('message', formData.message);
      
      if (formData.resumeType === 'upload' && formData.resume) {
        data.append('resume', formData.resume);
      } else if (formData.resumeType === 'link' && formData.resumeLink) {
        data.append('resumeLink', formData.resumeLink);
      }

      try {
        const res = await fetch('http://localhost:4001/api/sendCareerApplication', {
          method: 'POST',
          body: data
        });

        if (res.ok) {
          setStatus('Application sent successfully! ✓');
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            resume: null,
            resumeLink: '',
            resumeType: 'upload'
          });
          
          setTimeout(() => setStatus(''), 5000);
        } else {
          setStatus('Failed to send. Please try again.');
        }
      } catch (err) {
        console.error(err);
        setStatus('Error sending application.');
      }
    };

    return (
      <section id="careers" className="section section-bg-light">
        <div className="section-decoration decoration-green" style={{top: 0, right: 0, width: '24rem', height: '24rem'}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="section-header">
            <span className="section-badge">Join the Team</span>
            <h2 className="section-title">
              Careers at <span className="section-title-accent">FilmCocoon</span>
            </h2>
            <p className="section-description">
              We're always open to collaborating with passionate creatives. Apply for the position you aspire to!
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="form-container">
            <h3 className="form-title">Apply Now</h3>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your Full Name"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message (Optional)</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about yourself and the position you're interested in..."
                />
              </div>

              <div className="form-group">
                <label className="form-label">Resume / Portfolio (Optional)</label>
                
                <div className="resume-toggle">
                  <button
                    type="button"
                    onClick={() => handleResumeTypeChange('upload')}
                    className={`toggle-btn ${formData.resumeType === 'upload' ? 'active' : ''}`}
                  >
                    <Upload />
                    Upload File
                  </button>
                  <button
                    type="button"
                    onClick={() => handleResumeTypeChange('link')}
                    className={`toggle-btn ${formData.resumeType === 'link' ? 'active' : ''}`}
                  >
                    <LinkIcon />
                    Provide Link
                  </button>
                </div>

                {formData.resumeType === 'upload' && (
                  <div>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="file-input"
                    />
                    <p className="file-hint">PDF, DOC, or DOCX (Max 5MB)</p>
                  </div>
                )}

                {formData.resumeType === 'link' && (
                  <input
                    type="url"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://yourportfolio.com or Google Drive link"
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'Sending...'}
                className="form-submit"
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}
              >
                <Send className="w-5 h-5" />
                {status === 'Sending...' ? 'Sending...' : 'Submit Application'}
              </button>
            </form>

            {status && status !== 'Sending...' && (
              <div className={`form-status ${status.includes('success') ? 'success' : 'error'}`}>
                {status}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  export default Careers;