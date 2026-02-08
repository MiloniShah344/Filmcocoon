import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);
    
    const data = new FormData();
    
    // Web3Forms required fields
    data.append('access_key', 'a9d5d928-5a12-46e0-8967-45e934f9f56c');
    data.append('subject', `📩 New Message from ${formData.get('name')}`);
    data.append('from_name', 'FilmCocoon Contact');
    data.append('name', formData.get('name'));
    data.append('email', formData.get('email'));
    data.append('phone', formData.get('phone') || 'Not provided');
    data.append('message', formData.get('message'));

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });
      console.log("res: ", res)

      const result = await res.json();
      console.log('Web3Forms Response:', result);
      
      if (result.success) {
        setStatus('Message sent successfully! ✓');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus(`Failed: ${result.message || 'Please try again'}`);
        console.log('Web3Forms error:', result);
      }
    } catch (err) {
      setStatus('Network error. Please check your connection.');
      console.error('Fetch error:', err);
    }
  }

  return (
    <section id="contact" className="section section-bg-gradient">
      <div className="section-decoration decoration-green" style={{top: 0, left: 0, width: '24rem', height: '24rem'}}></div>
      <div className="section-decoration decoration-brown" style={{bottom: 0, right: 0, width: '24rem', height: '24rem'}}></div>

      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Let's Collaborate</span>
          <h2 className="section-title">
            Get In <span className="section-title-accent">Touch</span>
          </h2>
          <p className="section-description">
            Let's collaborate on your next project and bring your vision to life
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon-circle">
                <Mail className="contact-icon" />
              </div>
              <div className="contact-card-content">
                <h3>Email</h3>
                <a href="mailto:filmcocoon25@gmail.com">
                  filmcocoon25@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-circle">
                <Phone className="contact-icon" />
              </div>
              <div className="contact-card-content">
                <h3>Phone</h3>
                <a href="tel:+919033210387">
                  +91 90332 10387
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-circle">
                <MapPin className="contact-icon" />
              </div>
              <div className="contact-card-content">
                <h3>Location</h3>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>

            <div className="social-section">
              <h3>Connect on Social Media</h3>
              <div className="social-links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>

          <div className="form-container">
            <h3 className="form-title">Send a Message</h3>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+91 9912129034"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  rows="5"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="form-submit" disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>

              {status && status !== 'Sending...' && (
                <p className={`form-status ${status.includes('success') ? 'success' : 'error'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;