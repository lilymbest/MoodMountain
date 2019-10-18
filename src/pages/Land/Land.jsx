import React from 'react';
import { Link } from 'react-router-dom';
import './Land.css'
import MoodMountain from '../../components/MoodMountain/MoodMountain';




const Land = (props) => {
  return (
    <div className="homePage">
    
      <MoodMountain />
      
      <div className="authBtn">
        <Link className='btnSignIn' to='/login'>Sign In</Link>
        <Link className='btnSignUp' to='/signup'>Sign Up</Link>
      </div>
        
    </div>
  );
};


export default Land;
