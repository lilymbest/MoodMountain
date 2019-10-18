import React from 'react';
import './Landing.css'


const Landing = (props) => {
  return (
    <div className='Landing'>
      <h1>This Week:</h1>
      <div className="day">Hello <img className="details" src="images/appIcons/black_arrow_right.svg" alt=""></img></div>
      <div className="day">Hello <img className="details" src="images/appIcons/black_arrow_right.svg" alt=""></img></div>
      <div className="day">Hello <img className="details" src="images/appIcons/black_arrow_right.svg" alt=""></img></div>
      <div className="day">Hello <img className="details" src="images/appIcons/black_arrow_right.svg" alt=""></img></div>
    </div>
  );
};


export default Landing;