import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css'
import MoodMountain from '../../components/MoodMountain/MoodMountain';

const Welcome2 = (props) => {
  
  return (
      <div className='Welcome2'>
        <MoodMountain />
        <p>
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
          Mood Mountain is an emotional tracking app. 
        </p>
        <Link to='/welcome3'><img className="arrows" alt="" src="images/appIcons/black_arrow_right.svg"></img></Link>

      </div>
    );
  };

export default Welcome2;