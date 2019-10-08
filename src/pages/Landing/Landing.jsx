import React from 'react';
import './Landing.css'
import MoodMountain from '../../components/MoodMountain/MoodMountain';


const Landing = (props) => {
    return (
      <div className='Landing'>
        <MoodMountain />
        <div className="day">Hello</div>
        <div className="day">Hello</div>
        <div className="day">Hello</div>
        <div className="day">Hello</div>
      </div>
    );
  };

export default Landing;