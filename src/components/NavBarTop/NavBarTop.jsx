import React from 'react';
import { Link } from 'react-router-dom';




const NavBarTop = (props) => {
    let nav = props.user ?
      <div className="nav-logout" style={{backgroundColor: '#D17B88'}}>
        <Link to='' className='NavBar-link'>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        
      </div>
      :
      <div className="top-nav" style={{backgroundColor: '#D17B88'}}>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };


export default NavBarTop;