import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './NavBarTop.css'

const NavBarTop = (props) => {
  let nav = props.user ?

    <div>
      <div className="logoImage">
      <Link to='/landing'><img src="images/MoodMountain.png" alt=""/></Link>
      </div>

      <div className='NavBarWelcome'>
      <span>Welcome, {props.user.name}!</span>
      </div>

      <div className='NavBarLogOut'>
      <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
      </div>
    </div>
    :

    <div>
      <div className="logoImage">
      <Link to='/landing'><img src="images/MoodMountain.png" alt=""/></Link>
      </div>

      <div className="NavBarSignIn">
      <Link to='/login'>SIGN IN</Link>
      </div>

      <div className='NavBarSignUp'>
      <Link to='/signup'>SIGN UP</Link>
      </div>
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