import React from 'react';
import '../home/Home.css';
import OutlineBtn from '../../components/btn/OutlineBtn';
import ARROW from '../../assets/down-arrow.svg';
import TOPLEFT from '../../assets/header-left-img.svg';
import BOTTOMLEFT  from '../../assets/header-img1.svg';
import BOTTOMRIGHT  from '../../assets/header-img.svg';
import MAINIMG from '../../assets/main-img.svg';
import SOL from '../../assets/sol.svg';
import GROW from '../../assets/gr.svg';
import DESIGN from '../../assets/design.svg';
import { FaCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";



const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

  return (
    <section>
      <header>
        <img src={TOPLEFT} alt="" className="left-img" />
        <h1>Building Trust Through <br /> Inspired Design</h1>
        <p>We create branding, web, and UI/UX solutions designed to deliver measurable impact.</p>

        <div className="header-btn">
            <OutlineBtn text="Request a quote" className='outline'/>
            <img src={ARROW} alt="down arrow" />
        </div>
        <div className="bottom-imgs">
            <img src={BOTTOMLEFT} alt="left image" className='bottom-left-img'/>
            <img src={BOTTOMRIGHT} alt="right image" className='bottom-right-img'/>
        </div>
      </header>

      <main>
        <h2>Modern Solutions To Drive Growth, Built On A Foundation Of Partnership With Your Vision.</h2>

        <div className="main-content">
            <div className="main-content-img">
                <img src={MAINIMG} alt="" />
            </div>

            <div className="main-content-text">
              <p>At Webb Creatives, we are driven by a passion for innovation and a commitment to excellence. Our mission is to bridge the gap between creativity and technology, unlocking opportunities for growth and success through the power of collaboration.</p>

              <div className="main-content-circle-container">
                <div className="circle orange">User-First Design</div>
                <div className="circle black">Collaborative <br /> Approach</div>
                <div className="circle grey">Purposeful <br /> Innovation</div>
              </div>
            </div>
        </div>

        <div className="strategy-container">
            <div className="strategy-links">
                <p className='first-link'>Creative meets Strategy</p>
                <p>Client- Centered Collaboration</p>
                <p>Results you can measure</p>
                <p>Agile and Adaptive</p>
                <p>Transparency and Trust</p>
            </div>

            <div className="strategy-cards-container">
                <div className="strategy-card-wrapper">
                    <div className="num">01//</div>
                    <div className="strategy-card">
                        <img src={SOL} alt="" className="icon" />
                        <h3>Affordable Solutions</h3>
                        <p>Receive top-quality design services without the high price tag. At our core, we believe that exceptional design should be accessible to everyone, no matter the size of your budget.</p>
                    </div>
                </div>
                <div className="strategy-card-wrapper">
                    <div className="num">02//</div>
                    <div className="strategy-card">
                        <img src={GROW} alt="" className="icon" />
                        <h3>Scalable as you grow</h3>
                        <p>We’re ready to adapt to your changing needs. As your business evolves, we’re here to support you through every stage, whether you're scaling, launching new products, or adjusting your brand strategy.</p>
                    </div>
                </div>
                <div className="strategy-card-wrapper">
                    <div className="num">03//</div>
                    <div className="strategy-card">
                        <img src={DESIGN} alt="" className="icon" />
                        <h3>Custom Design Solutions</h3>
                        <p>Our expertise brings your vision to life. We transform your ideas into impactful designs, working closely with you to ensure every detail aligns with your goals.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="our-services">
            <h3>/our services</h3>

            <div className="our-services-wrapper">
            <div className="our-services-card">
                <h4>UI/UX Design</h4>
                <p>Create intuitive, user-focused designs that enhance experiences and strengthen connections with your audience.</p>
                <div className="bottom-divider">
                    <hr className='divider' />
                    <div className='circle-icon'> </div>
                </div>
            </div>
            <div className="our-services-card">
                <h4>Brand Identity</h4>
                <p>Your brand is more than a logo—it’s your story, values, and personality. We craft cohesive, memorable identities that build trust, reflect your unique voice, and leave a lasting impression.</p>
                <div className="bottom-divider">
                    <hr className='divider' />
                    <div className='circle-icon'> </div>
                </div>
            </div>
            <div className="our-services-card">
                <h4>Web & Mobile Dev</h4>
                <p>Create intuitive, user-focused mobile and web solutions that elevate experiences, boost engagement, and strengthen connections with your audience.</p>
                <div className="bottom-divider">
                    <hr className='divider' />
                    <div className='circle-icon'> </div>
                </div>
            </div>
            </div>
        </div>


        <div className="faq-container">
         <div className="faq-content">
           <h3>/FAQ</h3> 
           <div className="faq-wrapper">
            <h3 className='faq-wrapper-title'>Let’s clear <br /> things up</h3>
            <br />
             <OutlineBtn text="Request a quote" className='outline'/>
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
                   We specialize in UI/UX design for websites, mobile apps, and digital products. This includes user research, wireframing, prototyping, branding, and final UI design.
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
                   Our process includes discovery & research, ideation, wireframing, high-fidelity design, prototyping, user testing, and final handoff. We keep our clients involved every step of the way.
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
                   We work with clients of all sizes—from early-stage startups to established brands. We tailor our approach based on your needs and budget.
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
                   Absolutely! We love collaborating with developers and can deliver assets, specs, and design systems that are dev-ready.
                </p>
                </div>
            </div>
            </div>

         </div>


      </main>
    </section>
  );
};


export default Home