import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarBottom.css'


const NavBarBottom = (props) => {
    return (
      <div className='NavBarBottom' style={{backgroundColor: '#D17B88'}}>
        <Link to='/landing'><img className="appIcon" src="images/appIcons/black_calendar.svg" alt=""/></Link>
        <Link to='/dashboard'><img className="appIcon" src="images/appIcons/black_stats.svg" alt=""/></Link>
        <Link to='/landing'><img className="appIconCenter" src="images/appIcons/black_plus_circle.svg" alt=""/></Link>
        <Link to='/landing'><img className="appIcon" src="images/appIcons/black_profile.svg" alt=""/></Link>
        <Link to='/settings'><img className="appIcon" src="images/appIcons/black_settings2.svg" alt=""/></Link>
      </div>
    );
  };

export default NavBarBottom;