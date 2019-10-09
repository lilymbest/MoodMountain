/* Dependencies */
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { directive, tsImportEqualsDeclaration } from '@babel/types'
import userService from '../../utils/userService';

/* Components */
import NavBarTop from '../../components/NavBarTop/NavBarTop'
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom'
import MoodIcons from '../../components/MoodIcons/MoodIcons'

/* Pages */
import Dashboard from '../Dashboard/Dashboard'
import Settings from '../Settings/Settings'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Landing from '../Landing/Landing'
import Land from '../Land/Land'
import Calendar from '../Calendar/Calendar'
import Welcome1 from '../Welcome/welcome1'
import Welcome2 from '../Welcome/welcome2'
import Welcome3 from '../Welcome/welcome3'

/* Styles */
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser(),
    }
    /* Binding (this) to functions */
      this.handleLogout = this.handleLogout.bind(this)
      this.handleSignupOrLogin = this.handleSignupOrLogin.bind(this)
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
        <NavBarTop
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
        <Switch>  
          <Route exact path='/' render={() => 
            <Land /> 
            }/>
          <Route exact path='/landing' render={() => 
            <Landing /> 
          }/>
          <Route exact path='/calendar' render={() => 
            <Calendar /> 
          }/>
          <Route exact path='/settings' render={() => 
            <Settings /> 
          }/>
          <Route exact path='/welcome1' render={() => 
            <Welcome1 /> 
          }/>
          <Route exact path='/welcome2' render={() => 
            <Welcome2 /> 
          }/>
          <Route exact path='/welcome3' render={() => 
            <Welcome3 /> 
          }/>
          <Route exact path='/dashboard' render={() => 
            <Dashboard 
            user={this.state.user}
            /> 
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignUp
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
              <MoodIcons
                euphoricIcon={this.state.euphoricIcon}
                happyIcon={this.state.happyIcon}
                neutralIcon={this.state.neutralIcon}
                tenseIcon={this.state.tenseIcon}
                sadIcon={this.state.sadIcon}
                handleClickAutumn={this.handleClickAutumn}
              />
          </>
        }/>
        </Switch>
        <NavBarBottom 
        user={this.state.user}
        />
      </div>
    )
  }
}

export default App;