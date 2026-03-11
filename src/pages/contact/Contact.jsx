import React, { useState } from 'react';
import '../contact/Contact.css';
import EMAIL from '../../assets/email.svg';
import PHONE from '../../assets/phone.svg';
import CTC from '../../assets/ctc.svg';

const Contact = () => {

  const [activeInterest, setActiveInterest] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: ""
  });

  const interests = [
    "Website design",
    "UI/UX",
    "UX Audit",
    "Branding",
    "Landing Page",
    "NextGen"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({ error: "Please enter your name." });
      return;
    }

    if (!formData.company.trim()) {
      setStatus({ error: "Please enter your company name." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ error: "Please enter a valid email address." });
      return;
    }

    if (!activeInterest) {
      setStatus({ error: "Please select the service you are interested in." });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ error: "Please enter a message." });
      return;
    }

    setStatus({ loading: true });

    try {
     const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          interest: activeInterest
        })
      });

      if (!response.ok) {
        throw new Error("Email failed");
      }

      setStatus({
        loading: false,
        success: "Your message has been sent successfully!"
      });

      setTimeout(() => {
      setStatus(prev => ({ ...prev, success: "" }));
       }, 3000);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });

      setActiveInterest(null);

    } catch (error) {

      setStatus({
        loading: false,
        error: "Something went wrong. Please try again."
      });

    }
  };


  return (
    <div className='contact-wrapper'>

      <div className="contact-content">
        <h2>Let’s move <br /> the needle</h2>

        <ul>
          <li>
            <img src={EMAIL} alt="email icon" />
            info@webbcreativesagency.co.za
          </li>

          <li>
            <img src={PHONE} alt="phone icon" />
            +27 629 571 202
          </li>
        </ul>

        <img src={CTC} alt="contact illustration" className="ctc-img" />
      </div>

      <form onSubmit={handleSubmit}>

        <div className="ctc-inputs">

          <div className="form-control">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Tumelo"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>Company</label>
            <input
              type="text"
              name="company"
              placeholder="ABSA Bank"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="ctc-inputs">

          <div className="form-control">
            <label>Your email</label>
            <input
              type="email"
              name="email"
              placeholder="tumelo@absabank.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>Your phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="interests-wrapper">
          <p>I’m interested in..</p>

          <div className="interests">
            {interests.map((item, index) => (
              <p
                key={index}
                className={activeInterest === item ? "active" : ""}
                onClick={() => setActiveInterest(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="textarea-wrapper">
          <p>Tell us more about your project.</p>

          <textarea
            name="message"
            placeholder="Write the message here..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className='ctc-btn'
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Submit"}
          </button>

          {status.success && (
            <p className="success-message">{status.success}</p>
          )}

          {status.error && (
            <p className="error-message">{status.error}</p>
          )}

        </div>

      </form>

    </div>
  );
};

export default Contact;