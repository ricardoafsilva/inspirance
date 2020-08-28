import React, { Component } from 'react'
import cx from 'classnames'

import ResultModal from './ResultModal.tsx'

import './ResultItem.scss'

class ResultItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    static defaultProps = {
        className: ''
    }

    handleClick = (e) => {
        e.stopPropagation()

        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let props = this.props,
            isOpen = this.state.open

        return (
            <div className={cx('result-item-container', isOpen && 'open')} onClick={this.handleClick}>
                {isOpen && <ResultModal data={props.data} />}
                <div className='result-image-wrapper' style={{backgroundImage: `url(${props.data.link})`}}>
                </div>
            </div>
        )
    }
}

export default ResultItem
