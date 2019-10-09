import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import ThemeColors from '../ThemeColors/ThemeColors'
import MoodInput from '../MoodInput/MoodInput'


class App extends Component {
  render () {
    return (
      <Switch>
         
      <div className="App">
        <Route exact path='/' render={() =>
          <>
            <img className="logo" alt="logo" src="images/MoodMountain.png" />
            <header className='feelingToday'>How are you feeling today?</header>
            <div>
              <Link className='btnMood' to='/MoodInput'>Add Mood</Link>
              <Link className='btnTheme' to='/ThemeColors'>Change Theme</Link>
            </div>
          </>
          } />
        <Route exact path='/MoodInput' render={() => 
          <MoodInput />
        } />
        <Route exact path='/ThemeColors' render={() => 
          <ThemeColors />
        } />
      </div>
     </Switch>
    )
  }
}

export default App;

