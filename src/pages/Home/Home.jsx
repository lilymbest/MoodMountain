import React, { Component } from 'react';
import './Home.css'

class Home extends Component{
    constructor(props){
        super(props)

    this.state = {
    images: ['images/autumnthemeicon.png', 
            'images/forestthemeicon.png', 
            'images/glacierthemeicon.png',
            'images/lavenderthemeicon.png',
            'images/rainbowthemeicon.png',
            'images/MoodMountain.png'
            ],
    backgroundColors: ['#C32F27', '#646165', '#0E6BA8', '#DDCAD9', '#9BC53D', '#75F4F4'],
    themeIcon: 'images/MoodMountain.png',
    themeBackground: '#75F4F4'
    }
    this.autumnTheme = this.autumnTheme.bind(this)
    this.forestTheme = this.forestTheme.bind(this)
    this.glacierTheme = this.glacierTheme.bind(this)
    this.lavenderTheme = this.lavenderTheme.bind(this)
    this.rainbowTheme = this.rainbowTheme.bind(this)
    this.defaultTheme = this.defaultTheme.bind(this)
}
autumnTheme(){
    var images = this.state.images
    var autumn = this.state.images[0]
    var autumnBackground = this.state.backgroundColors[0]
    this.setState({themeIcon:autumn})
    this.setState({themeBackground:autumnBackground})
}

forestTheme(){
    var images = this.state.images
    var forest = this.state.images[1]
    var forestBackground = this.state.backgroundColors[1]
    this.setState({themeIcon:forest})
    this.setState({themeBackground:forestBackground})
}
glacierTheme(){
    var images = this.state.images
    var glacier = this.state.images[2]
    var glacierBackground = this.state.backgroundColors[2]
    this.setState({themeIcon:glacier})
    this.setState({themeBackground:glacierBackground})
}
lavenderTheme(){
    var images = this.state.images
    var lavender = this.state.images[3]
    var lavenderBackground = this.state.backgroundColors[3]
    this.setState({themeIcon:lavender})
    this.setState({themeBackground:lavenderBackground})
}
rainbowTheme(){
    var images = this.state.images
    var rainbow = this.state.images[4]
    var rainbowBackground = this.state.backgroundColors[4]
    this.setState({themeIcon:rainbow})
    this.setState({themeBackground:rainbowBackground})
}
defaultTheme(){
    var images = this.state.images
    var defaultTheme = this.state.images[5]
    var defaultBackground = this.state.backgroundColors[5]
    this.setState({themeIcon:defaultTheme})
    this.setState({themeBackground:defaultBackground})
}

handleClickAutumn(){
    this.autumnTheme()
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


render() {
    return (
    <div className="home" style={{background: this.state.themeBackground}}>
        <img src={this.state.themeIcon} alt=""/>
        <button onClick={() => this.handleClickAutumn()}><img className="btn" src="images/autumnthemeicon.png" /></button>
        <button onClick={() => this.handleClickForest()}><img className="btn" src="images/forestthemeicon.png" /></button>
        <button onClick={() => this.handleClickGlacier()}><img className="btn" src="images/glacierthemeicon.png" /></button>
        <button onClick={() => this.handleClickLavender()}><img className="btn" src="images/lavenderthemeicon.png" /></button>
        <button onClick={() => this.handleClickRainbow()}><img className="btn" src="images/rainbowthemeicon.png" /></button>
        <button onClick={() => this.handleClickDefault()}><img className="btn" src="images/MoodMountain.png" /></button>
    </div>
    )
    }
}

export default Home