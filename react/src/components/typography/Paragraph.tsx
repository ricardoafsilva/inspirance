import React, { Component, MouseEvent } from 'react'

import cx from 'classnames'

import './Paragraph.scss'

type Props = {
    className?: string,
    children?: any,
    onClick?: (e: React.MouseEvent) => void,
    size?: 'small' | 'medium',
}

class Paragraph extends Component<Props> {
    render() {
        return (
            <p
                className={cx('paragraph', this.props.className, this.props.size)}
                {...(this.props.onClick ? { onClick: this.props.onClick } : {})}>
                {this.props.children}
            </p>
        )
    }
}

export default Paragraph
