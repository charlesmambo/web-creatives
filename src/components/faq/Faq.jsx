import React from "react";
import "../faq/Faq.css";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import OutlineBtn from "../../components/btn/OutlineBtn";

const Faq = ({ showButton = true }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <div className="faq-content">
          <h3>/FAQ</h3>
          <div className="faq-wrapper">
            <h3 className="faq-wrapper-title">
              Let’s clear <br /> things up
            </h3>
            <br />

            {showButton && (
              <Link to="/contact">
                <OutlineBtn text="Request a quote" className="outline" />
              </Link>
            )}
          </div>
        </div>

        <div className="faq-view">
          {/* FAQ 1 */}
          <div className="faq-view-card">
            <div className="faq-view-card-title">
              <h4>What kind of design services do you offer?</h4>
              <div
                className="faq-view-icon-container"
                onClick={() => toggleFAQ(0)}
              >
                <p className={`plus ${openIndex === 0 ? "rotate" : ""}`}>+</p>
              </div>
            </div>

            <div className={`faq-answer ${openIndex === 0 ? "open" : ""}`}>
              <p className="faq-view-card-title-text">
                We specialize in UI/UX design for websites, mobile apps, and
                digital products. This includes user research, wireframing,
                prototyping, branding, and final UI design.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="faq-view-card">
            <div className="faq-view-card-title">
              <h4>What’s your design process like?</h4>
              <div
                className="faq-view-icon-container"
                onClick={() => toggleFAQ(1)}
              >
                <p className={`plus ${openIndex === 1 ? "rotate" : ""}`}>+</p>
              </div>
            </div>

            <div className={`faq-answer ${openIndex === 1 ? "open" : ""}`}>
              <p className="faq-view-card-title-text">
                Our process includes discovery & research, ideation,
                wireframing, high-fidelity design, prototyping, user testing,
                and final handoff. We keep our clients involved every step of
                the way.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="faq-view-card">
            <div className="faq-view-card-title">
              <h4>Do you work with startups or only large companies?</h4>
              <div
                className="faq-view-icon-container"
                onClick={() => toggleFAQ(2)}
              >
                <p className={`plus ${openIndex === 2 ? "rotate" : ""}`}>+</p>
              </div>
            </div>

            <div className={`faq-answer ${openIndex === 2 ? "open" : ""}`}>
              <p className="faq-view-card-title-text">
                We work with clients of all sizes—from early-stage startups to
                established brands. We tailor our approach based on your needs
                and budget.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="faq-view-card">
            <div className="faq-view-card-title">
              <h4>Can you work with our development team?</h4>
              <div
                className="faq-view-icon-container"
                onClick={() => toggleFAQ(3)}
              >
                <p className={`plus ${openIndex === 3 ? "rotate" : ""}`}>+</p>
              </div>
            </div>

            <div className={`faq-answer ${openIndex === 3 ? "open" : ""}`}>
              <p className="faq-view-card-title-text">
                Absolutely! We love collaborating with developers and can
                deliver assets, specs, and design systems that are dev-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
