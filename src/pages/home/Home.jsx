import React from 'react'
import OutlineBtn from '../../components/btn/OutlineBtn';

const Home = () => {
  return (
    <section>
      <header>
        <h2>Building Trust Through Inspired Design</h2>
        <p>We create branding, web, and UI/UX solutions designed to deliver measurable impact.</p>

        <div className="request-btn">
            <OutlineBtn text="Request a quote" />
        </div>
      </header>
    </section>
  );
};


export default Home