import React, { useState } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataObj = new FormData(event.target);
      formDataObj.append("access_key", "b2da9fe6-43be-451d-916a-2ffd45b5988d");

      const object = Object.fromEntries(formDataObj);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src="" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-availability">
            <span className="availability-icon">💼</span>
            <h2>Open to Opportunities</h2>
            <p className="availability-text">Currently seeking full-time positions in UAE</p>
          </div>
          <h1>Let's Work Together</h1>
          <p>I'm actively looking for new opportunities in the UAE. Whether you're hiring for a full-time role, contract work, or have a project in mind, I'd love to hear from you. Let's build something amazing together!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>akshayjyothip@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+971-568840282</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Sharjah, United Arab Emirates</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          {submitStatus === 'success' && (
            <div className="success-message">
              <p>✅ Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              <p>❌ Something went wrong. Please try again later.</p>
            </div>
          )}

          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          
          <button 
            type="submit" 
            className="contact-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;