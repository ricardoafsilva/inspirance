import React, { Component } from 'react'

import cx from 'classnames'

import './Heading1.scss'

type Props = {
    children?: any,
    className?: string,
}

class Heading1 extends Component<Props> {
    render() {
        return (
            <h1 className={cx('heading1', this.props.className)}>{this.props.children}</h1>
        )
    }
}

export default Heading1
