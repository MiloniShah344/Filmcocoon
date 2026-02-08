import React, { useState } from 'react';
import { Send, Link as LinkIcon } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resumeLink: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const data = new FormData();
    
    // Web3Forms required fields
    data.append('access_key', 'a9d5d928-5a12-46e0-8967-45e934f9f56c');
    data.append('subject', `New Career Application - ${formData.name}`);
    data.append('from_name', 'FilmCocoon Careers');
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone || 'Not provided');
    
    // Build detailed message
    let detailedMessage = `New Career Application\n\n`;
    detailedMessage += `Name: ${formData.name}\n`;
    detailedMessage += `Email: ${formData.email}\n`;
    detailedMessage += `Phone: ${formData.phone || 'Not provided'}\n\n`;
    
    if (formData.message) {
      detailedMessage += `Message:\n${formData.message}\n\n`;
    }
    
    if (formData.resumeLink) {
      detailedMessage += `Resume/Portfolio Link: ${formData.resumeLink}`;
    }
    
    data.append('message', detailedMessage);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });

      const result = await res.json();
      
      console.log('Web3Forms Response:', result);

      if (result.success) {
        setStatus('Application sent successfully! ✓');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          resumeLink: ''
        });
        
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus(`Failed: ${result.message || 'Please try again'}`);
        console.log('Web3Forms error:', result);
      }
    } catch (err) {
      setStatus('Network error. Please check your connection.');
      console.error('Fetch error:', err);
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
              <label className="form-label">Resume / Portfolio Link (Optional)</label>
              <div style={{position: 'relative'}}>
                <LinkIcon 
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    color: '#78716c',
                    pointerEvents: 'none'
                  }}
                />
                <input
                  type="url"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  className="form-input"
                  style={{paddingLeft: '40px'}}
                  placeholder="https://drive.google.com/... or https://yourportfolio.com"
                />
              </div>
              <p className="file-hint" style={{marginTop: '8px', fontSize: '0.875rem', color: '#78716c'}}>
                💡 Share a Google Drive link, Dropbox, or your online portfolio
              </p>
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