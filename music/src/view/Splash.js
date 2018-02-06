import React, { Component } from 'react';
import Main from './Main'
import { Redirect } from 'react-router-dom';  

import './Splash.css'
class Splash extends Component {


    constructor(props) {
        super(props)
        this.state=({
            redirect:false
        })
        setTimeout(() => {
          this.setState({
            redirect:true
          })
        }, 3000)
    }

    render() {
        if (this.state.redirect) {  
            return <Redirect push to="/main" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
        }  
        return (<div className="splash-container">
            <img src={require("../resouce/timg.jpg")} className="splash-logo" alt="logo" />
        </div>
        )
    }
}

export default Splash