import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props)

    this.state = {
    images: ['images/autumnthemeicon.png', 
            'images/forestthemeicon.png', 
            'images/glacierthemeicon.png',
            'images/lavenderthemeicon.png',
            'images/rainbowthemeicon.png'
            ],
    theme: 'images/MoodMountain.png',
    }
    this.changeThemes = this.changeThemes.bind(this);
}
changeThemes(){
    var images = this.state.images
    var image = images[Math.floor(Math.random() * images.length)]
    this.setState({theme:image})
}

handleClick(img){
    this.changeThemes(img)
    return img
}

render() {
    return (
    <div className="home">
        <button onClick={() => this.handleClick()}>Change Theme</button>
        <img src={this.state.theme} alt=""/>
    </div>
    )
    }
}

export default Home