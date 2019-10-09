import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';
import userService from '../../utils/userService';
import MoodMountain from '../../components/MoodMountain/MoodMountain';

class SignupForm extends Component {
  constructor() {
    super()
  this.state = {
    name: '',
    email: '',
    themeColor: '',
    euphoricIcon: '',
    happyIcon: '',
    neutralIcon: '',
    tenseIcon: '',
    sadIcon: '',
    password: '',
    passwordConf: '',
  }
  this.autumnTheme = this.autumnTheme.bind(this)
  this.forestTheme = this.forestTheme.bind(this)
  this.glacierTheme = this.glacierTheme.bind(this)
  this.lavenderTheme = this.lavenderTheme.bind(this)
  this.rainbowTheme = this.rainbowTheme.bind(this)
  this.defaultTheme = this.defaultTheme.bind(this)
  this.handleClickAutumn = this.handleClickAutumn.bind(this)
  this.isFormInvalid = this.isFormInvalid.bind(this)

  
  
}

isFormInvalid() {
  return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
}

autumnTheme(){
  var euphoricIcon = 'images/Icons/Autumn/euphoricAutumn.png'
  var happyIcon = 'images/Icons/Autumn/happyAutumn.png'
  var neutralIcon = 'images/Icons/Autumn/neutralAutumn.png'
  var tenseIcon = 'images/Icons/Autumn/tenseAutumn.png'
  var sadIcon = 'images/Icons/Autumn/zsadAutumn.png'
  var autumn = ''
  var autumnBackground = '#C32F27'
  this.setState({themeIcon:autumn})
  this.setState({themeColor:autumnBackground})
  this.setState({euphoricIcon: euphoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
}

forestTheme(){
  var euphoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var forest = ''
  var forestBackground = '#646165'
  this.setState({themeIcon:forest})
  this.setState({themeColor:forestBackground})
  this.setState({euphoricIcon: euphoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
}
glacierTheme(){
  var euphoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var glacier = ''
  var glacierBackground = '#0E6BA8'
  this.setState({themeIcon:glacier})
  this.setState({themeColor:glacierBackground})
  this.setState({euphoricIcon: euphoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})

}
lavenderTheme(){
  var euphoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var lavender = ''
  var lavenderBackground = '#DDCAD9'
  this.setState({themeIcon:lavender})
  this.setState({themeColor:lavenderBackground})
  this.setState({euphoricIcon: euphoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
}
rainbowTheme(){
  var euphoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var rainbow = ''
  var rainbowBackground = '#DDCAD9'
  this.setState({themeIcon:rainbow})
  this.setState({themeColor:rainbowBackground})
  this.setState({euphoricIcon: euphoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
}
defaultTheme(){
  var euphoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var defaultTheme = ''
  var defaultBackground = '#9BC53D'
  this.setState({themeIcon:defaultTheme})
  this.setState({themeColor:defaultBackground})
  this.setState({euphoricIcon: euphoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
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

handleChange = (e) => {
  this.props.updateMessage('');
  this.setState({
    // Using ES2015 Computed Property Names
    [e.target.name]: e.target.value
  });
}

handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await userService.signup(this.state);
    // Successfully signed up - show GamePage
    this.props.history.push('/');
  } catch (err) {
    // Invalid user data (probably duplicate email)
    this.props.updateMessage(err.message);
  }
}

  render() {
    return (
      <div className="signUpForm">
        <MoodMountain />
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/land'>Cancel</Link>
            </div>
          </div>
        </form>

        <div className="chooseATheme">
          <h2>Select a Theme Color:</h2>
          <div className="themeSelections1">
            <div className="chooseTheme">
              <button onClick={() => this.handleClickDefault()}><img className="btn" 
              src="images/moodmountain.png" alt="Default Icon" /></button>
              </div> 
            <div className="chooseTheme">
              <button onClick={() => this.handleClickAutumn()}><img className="btn" 
              src="images/autumnthemeicon.png" alt="Autumn Icon" /></button>
              </div>  
            <div className="chooseTheme">
              <button onClick={() => this.handleClickForest()}><img className="btn" 
              src="images/forestthemeicon.png" alt="Forest Icon" /></button>
              </div> 
          </div>
        <div className="themeSelections2">
            <div className="chooseTheme">
              <button onClick={() => this.handleClickGlacier()}><img className="btn" 
              src="images/glacierthemeicon.png" alt="Glacier Icon" /></button>
              </div>  
            <div className="chooseTheme">
              <button onClick={() => this.handleClickLavender()}><img className="btn" 
              src="images/lavenderthemeicon.png" alt="Lavender Icon" /></button>
              </div> 
            <div className="chooseTheme">
              <button onClick={() => this.handleClickRainbow()}><img className="btn" 
              src="images/rainbowthemeicon.png" alt="Rainbow Icon" /></button>
              </div>  
            </div>
          </div>
      </div>
    );
  }
}

export default SignupForm;
