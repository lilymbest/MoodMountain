import React, { Component } from 'react';

class MoodIcons extends Component{
    render() {
        return(
            <div className="mood-icons">
                <img src={this.props.euphoricIcon} alt=""/>
                <img src={this.props.happyIcon} alt=""/>
                <img src={this.props.neutralIcon} alt=""/>
                <img src={this.props.tenseIcon} alt=""/>
                <img src={this.props.sadIcon} alt=""/>
        </div>
        
        )
    }
}


export default MoodIcons