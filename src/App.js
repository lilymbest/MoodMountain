import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    moods: ['positive', 'negative'],
    moodInput: '',
    positive: ['Happy', 'Neutral', 'Manic', 'Calm'],
    negative: ['Depressed', 'Sad', 'Fatigued', 'Angry', 'Lonely', 'Anxious', 'Mixed'],
    date: Date,
  }
  handleAddMood = mood => {
    this.setState({
      moods : [mood, ...this.state.moods]
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    //state update
    this.handleAddMood(this.state.moodInput)
  }
  handleOnChange = event => {
    this.setState({
      moodInput : event.target.value
    })
  }
  render () {
    const renderMoods = this.state.moodInput.map((item, index) => {
      return (
        <li key={index} className="mood">
          {item}
        </li>
      )
    })
    return (
      <div className="App">
        <ul>{this.state.moodInput}</ul>
        <form className="add-form">
          <input 
          type="text" 
          onChange={this.handleOnChange} 
          value={this.state.moodInput} 
          autoComplete="off" 
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default App;
