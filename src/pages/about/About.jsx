import React from 'react';
import '../about/About.css';  
import ABT from '../../assets/abt-img.svg'; 
import VM from '../../assets/vm.svg'; 
import Faq from '../../components/faq/Faq';

const About = () => {
  return (
    <div className='about-wrapper'>
        <div className="abt-hero">
        <div className="abt-img-container">
            <img src={ABT} alt="" />
        </div>
        <div className="abt-hero-content">
            <h2>Our Story</h2>
            <p className='abt-paragraph'>Webb Creatives was founded in 2024 by Tumelo Webb, a self-taught creative with a passion for technology and design. More than just a church boy, Tumelo has always believed that design is more than how it looks — it’s how it works. With this philosophy, Webb Creatives was built to bridge the gap between creativity and functionality, helping businesses grow through purposeful design.
            </p>
            <p className='abt-paragraph'>
                We see design as a catalyst for transformation — turning ideas into meaningful experiences that build trust, inspire loyalty, and create long-term success. Guided by innovation and collaboration, Webb Creatives continues to craft solutions where creativity and technology work hand in hand to make an impact.
            </p>
        </div>
        </div>

        <div className="vm-wrapper">
            <div className="vm-content">
                <div className="vm-card">
                    <h2>Vision</h2>
                    <p className='abt-paragraph vm-paragraph-text'>Our vision is to be a leading creative partner recognized for excellence and innovation, empowering businesses to thrive in a digital-first world.</p>
                </div>
                <div className="vm-card">
                    <h2>Mission</h2>
                    <p className='abt-paragraph vm-paragraph-text'>At Webb Creatives, our mission is to bridge the gap between creativity and technology, delivering innovative solutions that drive growth and success through collaboration.</p>
                </div>
            </div>

            <div className="abt-img-container vm-img-container">
                 <img src={VM} alt="" />
            </div>
        </div>

        <div className="how-we-work">
            <h2>How we work</h2>
            <p className='ack-text'>Acknowledging the problem is the beginning of the solution.</p>

            <div className="work-cards-wrapper">
                <div className="works-card black-card">
                    <h4>Discover</h4>
                    <p >We start by learning about your business, goals, and audience.</p>
                </div>
                <div className="works-card orange-card">
                    <h4>Plan</h4>
                    <p>Together, we define the project scope, strategy, and creative direction.</p>
                </div>
                <div className="works-card grey-card">
                    <h4>Design</h4>
                    <p>Our team creates thoughtful, user-centered designs that bring your vision to life.</p>
                </div>
                <div className="works-card green-card">
                    <h4>Develop</h4>
                    <p>We refine, test, and build solutions that are functional, scalable, and ready for the real world.</p>
                </div>
                <div className="works-card black-card">
                    <h4>Deliver & Support</h4>
                    <p> We launch your project and remain available for ongoing support and improvements.</p>
                </div>
            </div>
        </div>

        <div className="abt-faq">
            <Faq showButton={false}/>
        </div>

    </div>
  )
}

export default About