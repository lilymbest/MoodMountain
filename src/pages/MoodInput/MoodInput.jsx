import React, { Component } from 'react';
import './MoodInput.css';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';


class MoodInput extends Component {
  constructor() {
    super()
    let user = userService.getUser()
    let userEuphoric = user.euphoric
    let userHappy = user.happy
    let userNeutral = user.neutral
    let userTense = user.tense
    let userSad = user.sad
    this.state = {
    user: userService.getUser(),
    moods: ['Euphoric', 'Elevated', 'Neutral', 'Tense', 'Low'],
    euphoric: userEuphoric,
    happy: userHappy,
    neutral: userNeutral,
    tense: userTense,
    sad: userSad,
  }
  this.handleClickEuphoric = this.handleClickEuphoric.bind(this)
  this.handleClickElevated = this.handleClickElevated.bind(this)
  this.handleClickNeutral = this.handleClickNeutral.bind(this)
  this.handleClickTense = this.handleClickTense.bind(this)
  this.handleClickSad = this.handleClickSad.bind(this)
  }  
  handleClickEuphoric() {
    var euphoricCount = this.state.euphoric
    return euphoricCount += 1
    
  }
  handleClickElevated() {
    var elevatedCount = this.state.happy
    return elevatedCount += 1
    
  }
  handleClickNeutral() {
    var neutralCount = this.state.neutral
    return neutralCount += 1
    
  }
  handleClickTense() {
    var tenseCount = this.state.tense
    return tenseCount += 1 
  }
  handleClickSad() {
    var sadCount = this.state.sad
    return sadCount += 1
  }

  handleSubmit = async (e) => {
    e.preventDefault();
      try {
        await userService.moodInput(this.state);
        // Successfully signed up - show GamePage
        this.props.history.push('/')
      } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(err.message);
    }
  }

  render () {
    return (
      <Switch>
         
      <div className="App">
      <Route exact path='/MoodInput' render={() =>
      <>
        <header className='feelingToday'>How are you today?</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
        <div className="moodSelector">
          <div className="moodSelectorIcons">
              <button className="moodButton" onClick={() => this.handleClickEuphoric()}><img className="btnMoodInput" alt="" src={this.state.user.euphoricIcon} /></button>
              <h3>{this.state.moods[0]}</h3>
          </div> 
          <div className="moodSelectorIcons">
              <button className="moodButton" onClick={() => this.handleClickElevated()}><img className="btnMoodInput" alt="" src={this.state.user.happyIcon} /></button>
              <h3>{this.state.moods[1]}</h3>
          </div> 
          <div className="moodSelectorIcons">
              <button className="moodButton" onClick={() => this.handleClickNeutral()}><img className="btnMoodInput" alt="" src={this.state.user.neutralIcon} /></button>
              <h3>{this.state.moods[2]}</h3>
          </div> 
          <div className="moodSelectorIcons">
              <button className="moodButton" onClick={() => this.handleClickTense()}><img className="btnMoodInput" alt="" src={this.state.user.tenseIcon} /></button>
              <h3>{this.state.moods[3]}</h3>
          </div> 
          <div className="moodSelectorIcons">
              <button className="moodButton" onClick={() => this.handleClickSad()}><img className="btnMoodInput" alt="" src={this.state.user.sadIcon} /></button>
              <h3>{this.state.moods[4]}</h3>
          </div> 
        </div>
        </form>
        </>
      } />
      </div>
     </Switch>
    )
  }
}

export default MoodInput;

