import React from 'react';
import './home.css';
import {NavLink} from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">Put Your Hotel Online and Start Earning!</div>
      <div className="home-quote">"Success is not the key to happiness. Happiness is the key to success."</div>
      <div className="home-quote">"The secret of getting ahead is getting started."</div>
      <div className="home-cta">Join us today and watch your business grow exponentially.</div>
      <button className="home-button"><NavLink to="/signup">Get Started</NavLink></button>
    </div>
  );
}

export default Home;
