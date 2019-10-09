import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './welcome.css'
import MoodMountain from '../../components/MoodMountain/MoodMountain';

const Welcome1 = (props) => { 
  
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
        <Link to='/welcome2'><img className="arrows" src="images/appIcons/black_arrow_right.svg"></img></Link>

      </div>
    );
  };

export default Welcome1;