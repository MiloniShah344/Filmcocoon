import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    try {
      const res = await fetch("http://localhost:4001/send-contact-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!")
        e.target.reset();
      } else {
        setStatus("Failed to send message. Please try again.")
      }
    } catch (err) {
      setStatus("Server error. Please check backend connection.")
      console.error(err);
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
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
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
                <label className="form-label">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="form-submit">
                Send Message
              </button>

              {status && (
                <p className="form-status success">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;