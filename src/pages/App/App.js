/* Imports */
import React, { Component } from 'react';
/* Components */
import NavBarTop from '../../components/NavBarTop/NavBarTop'

import NavBarBottom from '../../components/NavBarBottom/NavBarBottom'

/* Pages */
import Dashboard from '../Dashboard/Dashboard'
import Settings from '../Settings/Settings'
/* Styles */

import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import MoodIcons from '../../components/MoodIcons/MoodIcons';
import { directive } from '@babel/types';
import Theme from '../../components/Theme/Theme';
import userService from '../../utils/userService';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import MoodMountain from '../../components/MoodMountain/MoodMountain';
import Landing from '../Landing/Landing';
import Calendar from '../Calendar/Calendar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser(),
      moods: ['Euphoric', 'Elevated', 'Neutral', 'Tense', 'Low'],
      images: ['images/autumnthemeicon.png', 
              'images/forestthemeicon.png', 
              'images/glacierthemeicon.png',
              'images/lavenderthemeicon.png',
              'images/rainbowthemeicon.png',
              'images/MoodMountain.png'
              ],
      backgroundColors: ['#C32F27', '#646165', '#0E6BA8', '#DDCAD9', '#9BC53D', '#75F4F4'],
      themeIcon: '',
      themeBackground: '#75F4F4',
      euphoricIcon: 'images/Icons/Default/euphoricDefault2.png',
      happyIcon: 'images/Icons/Default/happyDefault.png',
      neutralIcon: 'images/Icons/Default/neutralDefault.png',
      tenseIcon: 'images/Icons/Default/tenseDefault.png',
      sadIcon: 'images/Icons/Default/zsadDefault.png',
      }
      this.autumnTheme = this.autumnTheme.bind(this)
      this.forestTheme = this.forestTheme.bind(this)
      this.glacierTheme = this.glacierTheme.bind(this)
      this.lavenderTheme = this.lavenderTheme.bind(this)
      this.rainbowTheme = this.rainbowTheme.bind(this)
      this.defaultTheme = this.defaultTheme.bind(this)
      this.handleClickAutumn = this.handleClickAutumn.bind(this)
      this.handleLogout = this.handleLogout.bind(this)
      this.handleSignupOrLogin = this.handleSignupOrLogin.bind(this)
  }
  autumnTheme(){
    var autumnEphoricIcon = 'images/Icons/Autumn/euphoricAutumn.png'
    var autumnHappyIcon = 'images/Icons/Autumn/happyAutumn.png'
    var autumnNeutralIcon = 'images/Icons/Autumn/neutralAutumn.png'
    var autumnTenseIcon = 'images/Icons/Autumn/tenseAutumn.png'
    var autumnSadIcon = 'images/Icons/Autumn/zsadAutumn.png'
    var autumn = this.state.images[0]
    var autumnBackground = this.state.backgroundColors[0]
    this.setState({themeIcon:autumn})
    this.setState({themeBackground:autumnBackground})
    this.setState({euphoricIcon: autumnEphoricIcon})
    this.setState({happyIcon: autumnHappyIcon})
    this.setState({neutralIcon: autumnNeutralIcon})
    this.setState({tenseIcon: autumnTenseIcon})
    this.setState({sadIcon: autumnSadIcon})
}

forestTheme(){
    var forestEphoricIcon = 'images/Icons/Forest/euphoricForest.png'
    var forestHappyIcon = 'images/Icons/Forest/happyForest.png'
    var forestNeutralIcon = 'images/Icons/Forest/neutralForest.png'
    var forestTenseIcon = 'images/Icons/Forest/tenseForest.png'
    var forestSadIcon = 'images/Icons/Forest/zsadForest.png'
    var forest = this.state.images[1]
    var forestBackground = this.state.backgroundColors[1]
    this.setState({themeIcon:forest})
    this.setState({themeBackground:forestBackground})
    this.setState({euphoricIcon: forestEphoricIcon})
    this.setState({happyIcon: forestHappyIcon})
    this.setState({neutralIcon: forestNeutralIcon})
    this.setState({tenseIcon: forestTenseIcon})
    this.setState({sadIcon: forestSadIcon})
}
glacierTheme(){
    var glacier = this.state.images[2]
    var glacierBackground = this.state.backgroundColors[2]
    this.setState({themeIcon:glacier})
    this.setState({themeBackground:glacierBackground})

}
lavenderTheme(){
    var lavender = this.state.images[3]
    var lavenderBackground = this.state.backgroundColors[3]
    this.setState({themeIcon:lavender})
    this.setState({themeBackground:lavenderBackground})
}
rainbowTheme(){
    var rainbow = this.state.images[4]
    var rainbowBackground = this.state.backgroundColors[4]
    this.setState({themeIcon:rainbow})
    this.setState({themeBackground:rainbowBackground})
}
defaultTheme(){
    var defaultTheme = this.state.images[5]
    var defaultBackground = this.state.backgroundColors[5]
    this.setState({themeIcon:defaultTheme})
    this.setState({themeBackground:defaultBackground})
}

handleClickAutumn(){
    this.autumnTheme()
    console.log(this.state.euphoricIcon)
}

handleClickForest(){
    this.forestTheme()
}

handleClickGlacier(){
    this.glacierTheme()
}

handleClickLavender(){
    this.lavenderTheme()
}

handleClickRainbow(){
    this.rainbowTheme()
}

handleClickDefault(){
    this.defaultTheme()
}

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({user: userService.getUser()});
}

  render() {
    return (
      <div className="App" style={{}}>
        <header></header>
        <NavBarTop
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
        <Switch>
        <Route exact path='/landing' render={() => <Landing /> } />
        <Route exact path='/calendar' render={() => <Calendar /> } />
        <Route exact path='/settings' render={() => <Settings /> } />
        <Route exact path='/dashboard' render={() => <Dashboard /> } />
        <Route exact path='/signup' render={({ history }) => 
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        <Route exact path='/howareyou' render={() =>
        <>
        <Theme 
        themeIcon={this.state.themeIcon}
        />
        <MoodIcons
        euphoricIcon={this.state.euphoricIcon}
        happyIcon={this.state.happyIcon}
        neutralIcon={this.state.neutralIcon}
        tenseIcon={this.state.tenseIcon}
        sadIcon={this.state.sadIcon}
        handleClickAutumn={this.handleClickAutumn}
        />
        </>
        } />
        </Switch>
        <NavBarBottom 
        user={this.state.user}
        />
      </div>
    )
  }
}

export default App;