import React, { Component } from 'react';
import "./index.css"
import '../../utils/net'
import Title from '../../widgets/title/Title'
import HttpUtils from '../../utils/net';
class Index extends Component {


    constructor(props) {
        super(props)
        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        HttpUtils.getMusicIndex().then((data) => {
            this.setState({
                datas: data.data
            })
        })
    }
    render() {
        var lis = []
        for (var i = 0; i < this.state.datas.length; i++) {
            lis[i] = this.renderItem(this.state.datas[i])
        }
        return (
            <div className="index-container">
             <Title title="首页"/>
                <ul className="ul">{lis}</ul>
            </div>
        )
    }
    renderItem(data) {
        return <div className="music-item-container">
        <a className="music-item-title">{data.title}</a>
            <img className="music-img" src={data.imgurl} />
            {/* <video src={data.link}></video> */}
            
        </div>
    }
}

export default Index