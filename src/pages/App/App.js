import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import ThemeColors from '../ThemeColors/ThemeColors'
import MoodInput from '../MoodInput/MoodInput'


class App extends Component {
  render () {
    return (
      <Switch>
         
      <div className="auth">
      <Route exact path='/' render={() =>
        <>
        <img className="logo" alt="logo" src="images/MoodMountain.png" />
        <h1 className="logoName">MOOD MOUNTAIN</h1>
        <h2 className="logoTagline">Emotional Tracking</h2>
        
        <div className="authBtn">
          <Link className='btnSignIn' to='/MoodInput'>Sign In</Link>
          <Link className='btnSignUp' to='/ThemeColors'>Sign Up</Link>
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

