import React, { Component } from "react"

import cx from 'classnames'

import "./Heading1.scss"

class Heading1 extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        className: ''
    }

    render() {
        let props = this.props
        
        return (
            <h1 className={cx('heading1', props.className)}>{props.children || ''}</h1>
        )
    }
}

export default Heading1
