import React, { Component } from 'react'
import './MoodMountain.css'

class Logo extends Component{
    render(){
    return(
    <div className="appLogo">
      <img className="loginLogo" alt="logo" src="images/MoodMountain.png" />
      <h1>Mood Mountain </h1>
      <h3>Emotional Tracking</h3>
    </div>
    )
}
}

export default Logo;