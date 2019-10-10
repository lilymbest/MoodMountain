import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Land.css'
import MoodMountain from '../../components/MoodMountain/MoodMountain';
import SignUp from '../../pages/SignUp/SignUp';
import Login from '../../pages/Login/Login'



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
