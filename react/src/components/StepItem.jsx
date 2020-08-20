import React, { Component } from "react"

import cx from 'classnames'
import iconRooms from './../../public/images/icon-rooms.png'

import "./StepItem.scss"

class StepItem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    static defaultProps = {
        className: '',
        icon: iconRooms
    }

    render() {
        return (
            <li className={cx('step-item', this.props.className)} onClick={this.props.onClick}>
                <div className='icon-wrapper'>
                    <img className='step-icon' src={this.props.icon} />
                </div>
            </li>
        )
    }
}

export default StepItem
