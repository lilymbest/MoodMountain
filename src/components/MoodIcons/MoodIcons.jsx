import React, { Component } from 'react';
import './MoodIcons.css'
import { Link } from 'react-router-dom';

class MoodIcons extends Component{
    render() {
        return(

            <div className="mood-icons">
                <header className='feelingToday'>How are you today?</header>
        
                <div className="moodSelector">
                    <div className="mood">
                        <img className="moodIcon" src={this.props.euphoricIcon} alt=""/>
                        <h3>Euphoric</h3>
                        </div> 
                    <div className="mood">
                        <img className="moodIcon" src={this.props.happyIcon} alt=""/>
                        <h3>Elevated</h3>
                        </div> 
                    <div className="mood">
                        <img className="moodIcon" src={this.props.neutralIcon} alt=""/>
                        <h3>Neutral</h3>
                        </div> 
                     <div className="mood">
                        <img className="moodIcon" src={this.props.tenseIcon} alt=""/>
                        <h3>Tense</h3>
                        </div> 
                    <div className="mood">
                        <img className="moodIcon" src={this.props.sadIcon} alt=""/>
                        <h3>Low</h3>
                        </div> 
                    </div>

                    <div className="authBtn">
                        <Link className='btnMood' to='/MoodInput'>Add Mood</Link>
                        </div>
            </div>
        )
    }
}

export default MoodIcons;