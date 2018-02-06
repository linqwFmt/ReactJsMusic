import React, { Component } from 'react';
import './BottomNavigation.css'

class BottomNavigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var items = []
        for (var i = 0; i < this.props.items.length; i++) {
            items[i] = this.renderItems(this.props.items, i, this.props.position)
        }
        return (
            <div className="bottomNavigation-container">{
                items
            }</div>
        )
    }


    renderItems(data, position, currentPosition) {
        return (
            <div className="bottomItem" onClick={() => {
                this.props.listner(position)
            }}>
                {position == currentPosition ?
                    <img className="icon" src={data[position].selectIcon} /> : <img className="icon" src={data[position].icon} />
                }
                {position == currentPosition ?
                    <a className="selectlable">
                        {data[position].lable}
                    </a> : <a className="lable">
                        {data[position].lable}
                    </a>
                }

            </div>
        )
    }
}

export default BottomNavigation