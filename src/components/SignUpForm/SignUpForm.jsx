import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';
import userService from '../../utils/userService';

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
  var ephoricIcon = 'images/Icons/Autumn/euphoricAutumn.png'
  var happyIcon = 'images/Icons/Autumn/happyAutumn.png'
  var neutralIcon = 'images/Icons/Autumn/neutralAutumn.png'
  var tenseIcon = 'images/Icons/Autumn/tenseAutumn.png'
  var sadIcon = 'images/Icons/Autumn/zsadAutumn.png'
  var autumn = ''
  var autumnBackground = '#C32F27'
  this.setState({themeIcon:autumn})
  this.setState({themeColor:autumnBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
}

forestTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var forest = ''
  var forestBackground = '#646165'
  this.setState({themeIcon:forest})
  this.setState({themeColor:forestBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
}
glacierTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var glacier = ''
  var glacierBackground = '#0E6BA8'
  this.setState({themeIcon:glacier})
  this.setState({themeColor:glacierBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})

}
lavenderTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var lavender = ''
  var lavenderBackground = '#DDCAD9'
  this.setState({themeIcon:lavender})
  this.setState({themeColor:lavenderBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
}
rainbowTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var rainbow = ''
  var rainbowBackground = '#DDCAD9'
  this.setState({themeIcon:rainbow})
  this.setState({themeColor:rainbowBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
}
defaultTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var defaultTheme = ''
  var defaultBackground = '#9BC53D'
  this.setState({themeIcon:defaultTheme})
  this.setState({themeColor:defaultBackground})
  this.setState({euphoricIcon: ephoricIcon})
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
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
        <div className="form-group">
            <div className="col-sm-12">
              <button onClick={() => this.handleClickAutumn()}>Autumn</button>
            </div>
            <div className="col-sm-12">
              <button onClick={() => this.handleClickForest()}>Forest</button>
            </div>
            <div className="col-sm-12">
              <button onClick={() => this.handleClickGlacier()}>glacier</button>
            </div>
            <div className="col-sm-12">
              <button onClick={() => this.handleClickLavender()}>lavender</button>
            </div>
            <div className="col-sm-12">
              <button onClick={() => this.handleClickRainbow()}>rainbow</button>
            </div>
            <div className="col-sm-12">
              <button onClick={() => this.handleClickDefault()}>default</button>
            </div>
          </div>
      </div>
    );
  }
}

export default SignupForm;
