import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './NavBarTop.css'

const NavBarTop = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      <Link to='/landing'><img src="images/MoodMountain.png" alt=""/></Link>
      <span className='NavBar-welcome'>WELCOME {props.user.name}!</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>SIGN IN</Link>
      <Link to='/landing'><img src="images/MoodMountain.png" alt=""/></Link>
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;
  let color = props.user ?
  props.user.themeColor 
  :
  "#D17B88"
  ;
  return (
    <div className='NavBar'style={{backgroundColor: color}}>
      {nav}
    </div>
  );
};



export default NavBarTop;