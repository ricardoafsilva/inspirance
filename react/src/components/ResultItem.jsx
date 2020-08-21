import React, { Component } from 'react'
import cx from 'classnames'

import './ResultItem.scss'

class ResultItem extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        className: '',
    }

    render() {
        let props = this.props

        return (
            <div className='result-item-container'>
                <div className='result-image-wrapper' style={{backgroundImage: `url(${props.data.link})`}}>
                </div>
            </div>
        )
    }
}

export default ResultItem
