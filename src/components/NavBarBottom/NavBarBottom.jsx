import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarBottom.css'


const NavBarBottom = (props) => {
    return (
      <div className='NavBarBottom' style={{backgroundColor: '#D17B88'}}>
        <img src="" alt=""/>
        <Link to='/dashboard' className='NavBar-link'>Dashboard</Link>
      </div>
    );
  };

export default NavBarBottom;