import React from 'react'
import MoodIcons from '../MoodIcons/MoodIcons'

const Theme = (props) => (
    <div className="theme">
    <MoodIcons 
        euphoricIcon={this.state.euphoricIcon}
        happyIcon={this.state.happyIcon}
        neutralIcon={this.state.neutralIcon}
        tenseIcon={this.state.tenseIcon}
        sadIcon={this.state.sadIcon}
    />
    <button onClick={() => props.handleClickDefault()}></button>
    </div>
    
)

export default Theme