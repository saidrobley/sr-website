import React from 'react';
//import header from '../img/h.jpg';
import './Hero.css';
const Header = () => {
  // return <img className="headerImage" src={header} alt="header" />;
  return (
    <div className="headerImage">
      <div className="hero ">
        <p>
          Hello, I'm <span className="name">Said Robley.</span>
        </p>
        <p>I'm a full-stack web developer.</p>

        <a className="btn-info " href="# ">
          View my work
        </a>
      </div>
    </div>
  );
};

export default Header;
