import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './NavBarBottom.css'

const NavBarBottom = (props) => {
<<<<<<< HEAD
  let bottomNav = props.user ? 
  <div>
    <Link to='/landing'><img className="appIcon" src="images/appIcons/black_calendar.svg" alt=""/></Link>
      <Link to='/dashboard'><img className="appIcon" src="images/appIcons/black_stats.svg" alt=""/></Link>
      <Link to='/landing'><img className="appIconCenter" src="images/appIcons/black_plus_circle.svg" alt=""/></Link>
      <Link to='/landing'><img className="appIcon" src="images/appIcons/black_profile.svg" alt=""/></Link>
      <Link to='/settings'><img className="appIcon" src="images/appIcons/black_settings2.svg" alt=""/></Link>
  </div>
  :
  <div></div>
  ;
  let color = props.user ?
  props.user.themeColor 
  :
  "#D17B88"
  ;
  return (
    <div className='NavBarBottom' style={{backgroundColor: color}}>
      {bottomNav}
    </div>
  );
};
=======
    return (
      <div className='NavBarBtm' style={{backgroundColor: '#D17B88'}}>
        <Link to='/landing'><img className="appIcon" src="images/appIcons/black_calendar.svg" alt=""/></Link>
        <Link to='/dashboard'><img className="appIcon" src="images/appIcons/black_stats.svg" alt=""/></Link>
        <Link to='/howareyou'><img className="appIconCenter" src="images/appIcons/black_plus_circle.svg" alt=""/></Link>
        <Link to='/login'><img className="appIcon" src="images/appIcons/black_profile.svg" alt=""/></Link>
        <Link to='/settings'><img className="appIcon" src="images/appIcons/black_settings2.svg" alt=""/></Link>
      </div>
    );
  };
>>>>>>> 41eaf62f8c13b821d2f8078f463d54dff0b1bc58

export default NavBarBottom;