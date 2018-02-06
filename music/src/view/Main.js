import React, { Component } from 'react';

import './Main.css'
import Index from '../frame/index/Index'
import Mine from '../frame/mine/Mine'
import BottomNavigation from '../widgets/bottomnaivigation/BottomNavigation'
class Main extends Component {


    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }
    componentDidMount() {
        this.initHeight();
    }

    initHeight() {
        document.getElementsByClassName("main-container")[0].style.height = window.screen.availHeight + "px"
    }
    render() {
        return (
            <div className="main-container">
                <div className="main-body-container">
                    {this.renderBodyView()}
                </div>
                <div className="main-bottom">
                    <BottomNavigation items={[{
                        lable: '首页',
                        icon: require("../resouce/service.png"),
                        selectIcon: require("../resouce/selectservice.png"),
                    }, {
                        lable: '个人',
                        icon: require("../resouce/account.png"),
                        selectIcon: require("../resouce/selectaccount.png"),
                    }]} listner={(i) => this.setState({
                        index: i
                    })} position={this.state.index} />
                </div>

            </div>
        )
    }
    renderBodyView() {
        if (this.state.index == 0) {
            return (
                <Index />
            )
        } else if (this.state.index == 1) {
            return (
                <Mine />
            )
        }
        return null
    }
}

export default Main