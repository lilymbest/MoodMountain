import React from 'react';
import './Landing.css'
import MoodMountain from '../../components/MoodMountain/MoodMountain';


const Landing = (props) => {
  return (
    <div className='Landing'>
      <MoodMountain />
      <div className="day">Hello<img className="details" src="images/appIcons/black_arrow_right.svg"></img></div>
      <div className="day">Hello<img className="details" src="images/appIcons/black_arrow_right.svg"></img></div>
      <div className="day">Hello<img className="details" src="images/appIcons/black_arrow_right.svg"></img></div>
      <div className="day">Hello<img className="details" src="images/appIcons/black_arrow_right.svg"></img></div>
    </div>
  );
};


export default Landing;