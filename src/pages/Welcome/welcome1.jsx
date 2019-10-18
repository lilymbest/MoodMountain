import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css'
import MoodMountain from '../../components/MoodMountain/MoodMountain';

const Welcome1 = (props) => { 
  
  return (
      <div className='Welcome1'>
        <MoodMountain />

        <h1 className="welcomeMessage">Welcome to</h1>
        <p>
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
        </p>
        <Link to='/welcome2'><img className="arrows" alt="" src="images/appIcons/black_arrow_right.svg"></img></Link>

      </div>
    );
  };

export default Welcome1;