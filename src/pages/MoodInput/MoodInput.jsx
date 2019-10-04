import React, { Component } from 'react';
import './MoodInput.css';
import { Route, Switch, Link } from 'react-router-dom';
import ThemeColors from '../ThemeColors/ThemeColors'


class App extends Component {
  state = {
    moods: ['Euphoric', 'Elevated', 'Neutral', 'Tense', 'Low'],
    euphoric: ['Manic', 'Grandiose', 'Impulsive'],
    elevated: ['Happy', 'Motivated', 'Excited'],
    neutral: ['Calm', 'Unsure', 'Disassociated'],
    tense: ['Anxious', 'Stressed', 'Angry'],
    low: ['Sad', 'Lonely', 'Depressed'],
    themes: {
    riverbed: ['#D0EFB1', '#B3D89C', '#9DC3C2', '#77A6B6', '#4D7298'],
    rainbow: ['#FDE74C', '#9BC53D', '#FA7921', '#E55934', '#5BC0EB'],
    glacier: ['#A6E1FA', '#0E6BA8', '#0A2472', '#001C55', '#00072D'],
    lavenderFields:['#EAFDF8', '#E5E9EC',' #DDCAD9', '#D1B1CB', '#7C616C'],
    autumn: ['#C32F27', '#D8572A', '#DB7C26', '#F7B538', '#780116'],
    forest: ['#DDFCAD', '#C8E087',' #95A472', '#82846D', '#646165']
    },
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
              <button onClick={() => this.handleClickEuphoric()}><img className="btn" src="images/.png" /></button>
              <h3>{this.state.moods[0]}</h3>
          </div> 
          <div>
              <button onClick={() => this.handleClickElevated()}><img className="btn" src="images/.png" /></button>
              <h3>{this.state.moods[1]}</h3>
          </div> 
          <div>
              <button onClick={() => this.handleClickNeutral()}><img className="btn" src="images/.png" /></button>
              <h3>{this.state.moods[2]}</h3>
          </div> 
          <div>
              <button onClick={() => this.handleClickTense()}><img className="btn" src="images/.png" /></button>
              <h3>{this.state.moods[3]}</h3>
          </div> 
          <div>
              <button onClick={() => this.handleClickLow()}><img className="btn" src="images/.png" /></button>
              <h3>{this.state.moods[4]}</h3>
          </div> 
        </div>


      <div className="authBtn">
          <Link className='btnSignIn' to='/MoodInput'>Add Mood</Link>
          <Link className='btnSignUp' to='/ThemeColors'>Change Theme</Link>
        </div>

        </>
      } />
        <Route exact path='/themecolors' render={() => 
          <ThemeColors />
          } />
          
      </div>
     </Switch>
    )
  }
}

export default App;

