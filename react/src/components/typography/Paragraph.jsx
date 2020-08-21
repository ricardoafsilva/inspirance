import React, { Component } from "react"

import cx from 'classnames'

import "./Paragraph.scss"

class Paragraph extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        className: ''
    }

    render() {
        let props = this.props

        return (
            <p
                className={cx('paragraph', props.className, props.small && 'small')}
                {...(this.props.onClick ? {onClick: this.props.onClick} : {})}>
                {props.children || ''}
            </p>
        )
    }
}

export default Paragraph
