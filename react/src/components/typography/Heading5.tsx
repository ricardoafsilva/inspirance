import React, { Component } from 'react'

import cx from 'classnames'

import './Heading5.scss'

type Props = {
    children?: any,
    className?: string,
}

class Heading5 extends Component<Props> {
    render() {
        return (
            <h5 className={cx('heading5', this.props.className)}>{this.props.children}</h5>
        )
    }
}

export default Heading5
