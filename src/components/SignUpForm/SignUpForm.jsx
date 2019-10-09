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
    themeColors: [],
    themeIcon: 'images/MoodMountain.png',
    themeColor: '#D17B88',
    euphoricIcon: 'images/moodIcons/Default/euphoricDefault.png',
    happyIcon: 'images/moodIcons/Default/happyDefault.png',
    neutralIcon: 'images/moodIcons/Default/neutralDefault.png',
    tenseIcon: 'images/moodIcons/Default/tenseDefault.png',
    sadIcon: 'images/moodIcons/Default/zsadDefault.png',
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
  var autumn = 'images/themeIcons/autumnthemeicon.png'
  var autumnBackground = '#C32F27'
  var autumnColors = ["#F7B538", "#DB7C26", "#D8572A", "#C32F27", "#780116"]
  this.setState({themeIcon:autumn})
  this.setState({themeColor:autumnBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
  this.setState({themeColors: autumnColors})
}

forestTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricForest.png'
  var happyIcon = 'images/Icons/Forest/happyForest.png'
  var neutralIcon = 'images/Icons/Forest/neutralForest.png'
  var tenseIcon = 'images/Icons/Forest/tenseForest.png'
  var sadIcon = 'images/Icons/Forest/zsadForest.png'
  var forest = 'images/themeIcons/forestthemeicon.png'
  var forestBackground = '#646165'
  var forestColors = ["#DDFCAD", "#C8E087", "#95A472", "#82846D", "#646165"]
  this.setState({themeIcon:forest})
  this.setState({themeColor:forestBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
  this.setState({themeColors: forestColors})
}
glacierTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricGlacier.png'
  var happyIcon = 'images/Icons/Forest/happyGlacier.png'
  var neutralIcon = 'images/Icons/Forest/neutralGlacier.png'
  var tenseIcon = 'images/Icons/Forest/tenseGlacier.png'
  var sadIcon = 'images/Icons/Forest/zsadGlacier.png'
  var glacier = 'images/themeIcons/glacierthemeicon.png'
  var glacierBackground = '#0E6BA8'
  var defaultColors = ["#A6E1FA", "#0E6BA8", "#0A2472", "#001C55", "#00072D"]
  this.setState({themeIcon:glacier})
  this.setState({themeColor:glacierBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
  this.setState({themeColors: defaultColors})

}
lavenderTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricLavender.png'
  var happyIcon = 'images/Icons/Forest/happyLavender.png'
  var neutralIcon = 'images/Icons/Forest/neutralLavender.png'
  var tenseIcon = 'images/Icons/Forest/tenseLavender.png'
  var sadIcon = 'images/Icons/Forest/zsadLavender.png'
  var lavender = 'images/themeIcons/lavenderthemeicon.png'
  var lavenderBackground = '#DDCAD9'
  var defaultColors = ["#EAFDF8", "#E5E9EC", "#DDCAD9", "#D1B1CB", "#7C616C"]
  this.setState({themeIcon:lavender})
  this.setState({themeColor:lavenderBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
  this.setState({themeColors: defaultColors})
}
rainbowTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricRainbow.png'
  var happyIcon = 'images/Icons/Forest/happyRainbow.png'
  var neutralIcon = 'images/Icons/Forest/neutralRainbow.png'
  var tenseIcon = 'images/Icons/Forest/tenseRainbow.png'
  var sadIcon = 'images/Icons/Forest/zsadRainbow.png'
  var rainbow = 'images/themeIcons/rainbowthemeicon.png'
  var rainbowBackground = '#DDCAD9'
  var rainbowColors = ["#5BC0EB", "#9BC53D", "#FDE74C", "#FA7921", "#E55934"]
  this.setState({themeIcon:rainbow})
  this.setState({themeColor:rainbowBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
  this.setState({themeColors: rainbowColors})
}
defaultTheme(){
  var ephoricIcon = 'images/Icons/Forest/euphoricDefault.png'
  var happyIcon = 'images/Icons/Forest/happyDefault.png'
  var neutralIcon = 'images/Icons/Forest/neutralDefault.png'
  var tenseIcon = 'images/Icons/Forest/tenseDefault.png'
  var sadIcon = 'images/Icons/Forest/zsadDefault.png'
  var defaultTheme = 'images/themeIcons/MoodMountain.png'
  var defaultBackground = '#9BC53D'
  var defaultColors = ["#75F4F4", "#90E0F3", "#B8B3E9", "#D999B9", "#D17B88"]
  this.setState({themeIcon:defaultTheme})
  this.setState({themeColor:defaultBackground})
  this.setState({euphoricIcon: ephoricIcon})
  this.setState({happyIcon: happyIcon})
  this.setState({neutralIcon: neutralIcon})
  this.setState({tenseIcon: tenseIcon})
  this.setState({sadIcon: sadIcon})
  this.setState({themeColors: defaultColors})
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
