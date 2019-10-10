import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './NavBarBottom.css'

const NavBarBottom = (props) => {
  let bottomNav = props.user ? 
  <div className="NavBarBtm">
      <Link to='/landing'><img className="appIcon" src="images/appIcons/black_list.svg" alt=""/></Link>
      <Link to='/dashboard'><img className="appIcon" src="images/appIcons/black_stats.svg" alt=""/></Link>
      <Link to='/moodinput'><img className="appIconCenter" src="images/appIcons/black_plus_circle.svg" alt=""/></Link>
      <Link to='/calendar'><img className="appIcon" src="images/appIcons/black_calendar.svg" alt=""/></Link>
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

export default NavBarBottom;