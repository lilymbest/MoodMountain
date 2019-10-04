import React, { Component } from 'react'
import MoodIcons from '../MoodIcons/MoodIcons'

class Theme extends Component{
    render(){
    return(
    <div className="theme">
    <img src={this.props.themeIcon} alt=""/>
    </div>
    )
}
}

export default Theme