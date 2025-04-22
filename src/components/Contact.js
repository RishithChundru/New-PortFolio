import React, { useState } from 'react';
import '../styles/components/Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields'
      });
      return;
    }
    
    try {
      // Submit form to Formspree
      const response = await fetch('https://formspree.io/f/xdkgndpy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Form submitted successfully
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Your message has been sent successfully!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: ''
          });
        }, 5000);
      } else {
        // Form submission failed
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="map-icon"></i>
              </div>
              <h3>My Address</h3>
              <p>Banda Pattabhi Rice Mill Street, Velpur, Tanuku, Andhra Pradesh</p>
              <p>Pin Code: 534222</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="email-icon"></i>
              </div>
              <h3>Email Me</h3>
              <p>rishithrishith1@gmail.com</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="phone-icon"></i>
              </div>
              <h3>Call Me</h3>
              <p>+91 8317579171</p>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/RishithChundru" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rishith23/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/rishith__chowdary/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/xdkgndpy" method="POST">
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;