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
      euphoric: 1,
      happy: 1,
      neutral: 1,
      tense: 1,
      sad: 1,
      themeColors: [],
      themeIcon: 'images/icons/MoodMountain.png',
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
    this.riverbedTheme = this.riverbedTheme.bind(this)
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
    var autumn = 'images/themeIcons/autumnthemeicon.png'
    var autumnBackground = '#C32F27'
    var autumnColors = ["#F7B538", "#DB7C26", "#D8572A", "#C32F27", "#780116"]
    this.setState({themeIcon:autumn})
    this.setState({themeColor:autumnBackground})
    this.setState({euphoricIcon: euphoricIcon})
    this.setState({happyIcon: happyIcon})
    this.setState({neutralIcon: neutralIcon})
    this.setState({tenseIcon: tenseIcon})
    this.setState({sadIcon: sadIcon})
    this.setState({themeColors: autumnColors})
  }

  forestTheme(){
    var euphoricIcon = 'images/Icons/Forest/euphoricForest.png'
    var happyIcon = 'images/Icons/Forest/happyForest.png'
    var neutralIcon = 'images/Icons/Forest/neutralForest.png'
    var tenseIcon = 'images/Icons/Forest/tenseForest.png'
    var sadIcon = 'images/Icons/Forest/zsadForest.png'
    var forest = 'images/themeIcons/forestthemeicon.png'
    var forestBackground = '#646165'
    var forestColors = ["#DDFCAD", "#C8E087", "#95A472", "#82846D", "#646165"]
    this.setState({themeIcon:forest})
    this.setState({themeColor:forestBackground})
    this.setState({euphoricIcon: euphoricIcon})
    this.setState({happyIcon: happyIcon})
    this.setState({neutralIcon: neutralIcon})
    this.setState({tenseIcon: tenseIcon})
    this.setState({sadIcon: sadIcon})
    this.setState({themeColors: forestColors})
  }
  glacierTheme(){
    var euphoricIcon = 'images/Icons/Glacier/euphoricGlacier.png'
    var happyIcon = 'images/Icons/Glacier/happyGlacier.png'
    var neutralIcon = 'images/Icons/Glacier/neutralGlacier.png'
    var tenseIcon = 'images/Icons/Glacier/tenseGlacier.png'
    var sadIcon = 'images/Icons/Glacier/zsadGlacier.png'
    var glacier = 'images/themeIcons/glacierthemeicon.png'
    var glacierBackground = '#0E6BA8'
    var glacierColors = ["#A6E1FA", "#0E6BA8", "#0A2472", "#001C55", "#00072D"]
    this.setState({themeIcon:glacier})
    this.setState({themeColor:glacierBackground})
    this.setState({euphoricIcon: euphoricIcon})
    this.setState({happyIcon: happyIcon})
    this.setState({neutralIcon: neutralIcon})
    this.setState({tenseIcon: tenseIcon})
    this.setState({sadIcon: sadIcon})
    this.setState({themeColors: glacierColors})
  }
  lavenderTheme(){
    var euphoricIcon = 'images/Icons/Lavender/euphoricLavender.png'
    var happyIcon = 'images/Icons/Lavender/happyLavender.png'
    var neutralIcon = 'images/Icons/Lavender/neutralLavender.png'
    var tenseIcon = 'images/Icons/Lavender/tenseLavender.png'
    var sadIcon = 'images/Icons/Lavender/zsadLavender.png'
    var lavender = 'images/themeIcons/lavenderthemeicon.png'
    var lavenderBackground = '#DDCAD9'
    var defaultColors = ["#EAFDF8", "#E5E9EC", "#DDCAD9", "#D1B1CB", "#7C616C"]
    this.setState({themeIcon:lavender})
    this.setState({themeColor:lavenderBackground})
    this.setState({euphoricIcon: euphoricIcon})
    this.setState({happyIcon: happyIcon})
    this.setState({neutralIcon: neutralIcon})
    this.setState({tenseIcon: tenseIcon})
    this.setState({sadIcon: sadIcon})
    this.setState({themeColors: defaultColors})
  }
  riverbedTheme(){
    var euphoricIcon = 'images/Icons/Riverbed/euphoricRiverbed.png'
    var happyIcon = 'images/Icons/Riverbed/happyRiverbed.png'
    var neutralIcon = 'images/Icons/Riverbed/neutralRiverbed.png'
    var tenseIcon = 'images/Icons/Riverbed/tenseRiverbed.png'
    var sadIcon = 'images/Icons/Riverbed/zsadRiverbed.png'
    var riverbed = 'images/themeIcons/riverbedthemeicon.png'
    var riverbedBackground = '#D0EFB1'
    var riverbedColors = ['#D0EFB1', '#B3D89C', '#9DC3C2', '#77A6B6', '#4D7298']
    this.setState({themeIcon:riverbed})
    this.setState({themeColor:riverbedBackground})
    this.setState({euphoricIcon: euphoricIcon})
    this.setState({happyIcon: happyIcon})
    this.setState({neutralIcon: neutralIcon})
    this.setState({tenseIcon: tenseIcon})
    this.setState({sadIcon: sadIcon})
    this.setState({themeColors: riverbedColors})
  }
  defaultTheme(){
    var euphoricIcon = 'images/Icons/Default/euphoricDefault2.png'
    var happyIcon = 'images/Icons/Default/happyDefault.png'
    var neutralIcon = 'images/Icons/Default/neutralDefault.png'
    var tenseIcon = 'images/Icons/Default/tenseDefault.png'
    var sadIcon = 'images/Icons/Default/zsadDefault.png'
    var defaultTheme =  'images/themeIcons/defaultthemeicon.png'
    var defaultBackground = '#D17B88'
    var defaultColors = ["#75F4F4", "#90E0F3", "#B8B3E9", "#D999B9", "#D17B88"]
    this.setState({themeIcon:defaultTheme})
    this.setState({themeColor:defaultBackground})
    this.setState({euphoricIcon: euphoricIcon})
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

  handleClickRiverbed(){
    this.riverbedTheme()
  }

  handleClickDefault(){
    this.defaultTheme()
  }

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
      try {
        await userService.signup(this.state);
        // Successfully signed up - show GamePage
        this.props.history.push('/')
      } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  render() {
    return (
      <div className="signUpForm">
        <MoodMountain />
        <div className="signUp">

          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <h2 className="formHeader">Sign Up:</h2>
              <div className="form-group">
                <input type="text" autocomplete="off" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                </div>

              <div className="form-group">
                <input type="email" autocomplete="off" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>

              <div className="form-group">
                <input type="password" autocomplete="off" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                </div>

              <div className="form-group">
                <input type="password" autocomplete="off" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                </div>

              <div className="button-group">
                <button className="formSignUp" disabled={this.isFormInvalid()}>Sign Up</button>
                <Link to='/'>Cancel</Link>
                </div>
            </form>


          <div className="chooseATheme">
            <h2 className="formHeader">Select a Theme Color:</h2>
            <div className="themeSelections1">
              <div className="chooseTheme">
                <button onClick={() => this.handleClickDefault()}><img
                src="images/defaultthemeicon.png" alt="Default Icon" className="themeColor"/></button>
                </div> 
              <div className="chooseTheme">
                <button onClick={() => this.handleClickAutumn()}><img
                src="images/autumnthemeicon.png" alt="Autumn Icon" className="themeColor"/></button>
                </div>  
              <div className="chooseTheme">
                <button onClick={() => this.handleClickForest()}><img
                src="images/forestthemeicon.png" alt="Forest Icon" className="themeColor"/></button>
                </div> 
            </div>
            <div className="themeSelections2">
              <div className="chooseTheme">
                <button onClick={() => this.handleClickGlacier()}><img 
                src="images/glacierthemeicon.png" alt="Glacier Icon" className="themeColor"/></button>
                </div>  
              <div className="chooseTheme">
                <button onClick={() => this.handleClickRiverbed()}><img
                src="images/riverbedthemeicon.png" alt="Riverbed Icon" className="themeColor"/></button>
                </div>  
              <div className="chooseTheme">
                <button onClick={() => this.handleClickLavender()}><img 
                src="images/lavenderthemeicon.png" alt="Lavender Icon" className="themeColor"/></button>
                </div> 
                </div>
              <div className='preview'>
                <div className='preview-nav' style={{backgroundColor: this.state.themeColor}}>
                  <img className='preview-img'src={this.state.themeIcon} alt=""/>
                </div>
                <div className="preview-text">Preview the <br></br> theme color here</div>
                <div className='preview-btm-nav' style={{backgroundColor: this.state.themeColor}}>
                  </div>
                </div>
              </div>
              </div>
        </div>
    );
  }
}

export default SignupForm;
