import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css'
import MoodMountain from '../../components/MoodMountain/MoodMountain';

const Welcome3 = () => {

  return (
      <div className='Welcome1'>
        <h1 className="welcome">Welcome to</h1>
        <MoodMountain />
        <p>
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
      </p>
        <Link to='/moodinput'><img className="arrows" alt="" src="images/appIcons/black_arrow_right.svg"></img></Link>

      </div>
    );
  };

export default Welcome3;