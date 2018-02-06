import React, { Component } from 'react';
import './Title.css'

export default class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="title-container">
                <div className="title-center">
                    <a className="title-center-lable">{this.props.title}</a>
                </div>
            </div>
        )
    }
} 