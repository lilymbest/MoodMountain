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
    theme: 'images/MoodMountain.png',
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
    this.setState({theme:autumn})
}

forestTheme(){
    var images = this.state.images
    var forest = this.state.images[1]
    this.setState({theme:forest})
}
glacierTheme(){
    var images = this.state.images
    var glacier = this.state.images[2]
    this.setState({theme:glacier})
}
lavenderTheme(){
    var images = this.state.images
    var lavender = this.state.images[3]
    this.setState({theme:lavender})
}
rainbowTheme(){
    var images = this.state.images
    var rainbow = this.state.images[4]
    this.setState({theme:rainbow})
}
defaultTheme(){
    var images = this.state.images
    var defaultTheme = this.state.images[5]
    this.setState({theme:defaultTheme})
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
    <div className="home">
        <img src={this.state.theme} alt=""/>
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