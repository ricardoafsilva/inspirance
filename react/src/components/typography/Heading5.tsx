import React, { Component } from "react"

import cx from 'classnames'

import "./Heading5.scss"

class Heading5 extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        className: ''
    }

    render() {
        let props = this.props

        return (
            <h5 className={cx('heading5', props.className)}>{props.children || ''}</h5>
        )
    }
}

export default Heading5
