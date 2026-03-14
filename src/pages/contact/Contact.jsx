import React, { useState } from 'react';
import '../contact/Contact.css';
import EMAIL from '../../assets/email.svg';
import PHONE from '../../assets/phone.svg';
import CTC from '../../assets/ctc.svg';
import { Forminit } from 'forminit';

const forminit = new Forminit();
const FORM_ID = 'u8a736h7fal'; 

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

  // ---- VALIDATIONS ----
  if (!formData.name.trim()) {
    setStatus({ loading: false, success: "", error: "Please enter your name." });
    return;
  }

  if (!formData.company.trim()) {
    setStatus({ loading: false, success: "", error: "Please enter your company name." });
    return;
  }

  if (!validateEmail(formData.email)) {
    setStatus({ loading: false, success: "", error: "Please enter a valid email address." });
    return;
  }

  if (!activeInterest) {
    setStatus({ loading: false, success: "", error: "Please select the service you are interested in." });
    return;
  }

  if (!formData.message.trim()) {
    setStatus({ loading: false, success: "", error: "Please enter a message." });
    return;
  }

  setStatus({ loading: true, success: "", error: "" });

  // ---- FORMNIT SUBMISSION ----
  const formDataToSend = new FormData();
  formDataToSend.append("fi-sender-fullName", formData.name);           // Full name
  formDataToSend.append("fi-text-company", formData.company);           // Company
  formDataToSend.append("fi-sender-email", formData.email);            // Email
  formDataToSend.append("fi-text-phone", formData.phone);              // Phone
  formDataToSend.append("fi-text-interest", activeInterest);           // Interest
  formDataToSend.append("fi-text-message", formData.message);          // Message

  try {
    const { error } = await forminit.submit(FORM_ID, formDataToSend);

    if (error) {
      let cleanError = error.message || "Something went wrong. Please try again.";
      if (/<[a-z][\s\S]*>/i.test(cleanError)) {
        cleanError = "Your message could not be sent. Please try again.";
      }

      setStatus({ loading: false, success: "", error: cleanError });
      return;
    }

    setStatus({ loading: false, success: "Your message has been sent successfully!", error: "" });
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    setActiveInterest(null);

    setTimeout(() => setStatus(prev => ({ ...prev, success: "" })), 3000);

  } catch (err) {
    setStatus({ loading: false, success: "", error: "Something went wrong. Please try again." });
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
