import React, { Component } from 'react';
import './MoodInput.css';
import { Route, Switch, Link } from 'react-router-dom';
import userService from '../../utils/userService';


class MoodInput extends Component {
  constructor() {
    super()
  this.state = {
    user: userService.getUser(),
    moods: ['Euphoric', 'Elevated', 'Neutral', 'Tense', 'Low']
  }
  this.handleClickEuphoric = this.handleClickEuphoric.bind(this)
  this.handleClickElevated = this.handleClickElevated.bind(this)
  this.handleClickNeutral = this.handleClickNeutral.bind(this)
  this.handleClickTense = this.handleClickTense.bind(this)
  this.handleClickSad = this.handleClickSad.bind(this)
  }  
  handleClickEuphoric() {
    var euphoricCount = this.state.user.euphoric
    console.log(this.state.user.euphoric)
    return euphoricCount += 1
    
  }
  handleClickElevated() {
    var elevatedCount = this.state.user.happy
    console.log(this.state.user.happy)
    return elevatedCount += 1
    
  }
  handleClickNeutral() {
    var neutralCount = this.state.user.neutral
    console.log(this.state.user.neutral)
    return neutralCount += 1
    
  }
  handleClickTense() {
    var tenseCount = this.state.user.tense
    console.log(this.state.user.tense)
    return tenseCount += 1 
  }
  handleClickSad() {
    var sadCount = this.state.user.sad
    console.log(this.state.user.sad)
    return sadCount + 1
   
  }
  render () {
    return (
      <Switch>
         
      <div className="App">
      <Route exact path='/MoodInput' render={() =>
      <>
        <header className='feelingToday'>How are you today?</header>

        <div className="moodSelector">
          <div>
              <button onClick={() => this.handleClickEuphoric()}><img className="btn" src={this.state.user.euphoricIcon} /></button>
              <h3>{this.state.moods[0]}</h3>
          </div> 
          <div>
              <button onClick={() => this.handleClickElevated()}><img className="btn" src={this.state.user.happyIcon} /></button>
              <h3>{this.state.moods[1]}</h3>
          </div> 
          <div>
              <button onClick={() => this.handleClickNeutral()}><img className="btn" src={this.state.user.neutralIcon} /></button>
              <h3>{this.state.moods[2]}</h3>
          </div> 
          <div>
              <button onClick={() => this.handleClickTense()}><img className="btn" src={this.state.user.tenseIcon} /></button>
              <h3>{this.state.moods[3]}</h3>
          </div> 
          <div>
              <button onClick={() => this.handleClickSad()}><img className="btn" src={this.state.user.sadIcon} /></button>
              <h3>{this.state.moods[4]}</h3>
          </div> 
        </div>
        <div className="description">
        <input className="description" type="text"/>
        <h3>Description</h3>
        </div>
        </>
      } />
      </div>
     </Switch>
    )
  }
}

export default MoodInput;

