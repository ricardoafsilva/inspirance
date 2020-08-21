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
        return (
            <div className='result-item-container'>

            </div>
        )
    }
}

export default ResultItem
