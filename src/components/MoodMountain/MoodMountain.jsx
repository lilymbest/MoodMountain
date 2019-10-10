import React, { Component } from 'react'
import './MoodMountain.css'

class Logo extends Component{
    render(){
    return(
    <div className="logoMM">
      <img className="logoImage" alt="logo" src="images/MoodMountain.png" />
      <h1 className="logoName">Mood Mountain </h1>
      <h3 className="logoTagline">Emotional Tracking</h3>
    </div>
    )
}
}

export default Logo;
