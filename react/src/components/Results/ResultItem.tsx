import React, { Component, MouseEvent } from 'react'
import cx from 'classnames'

import ResultModal from './ResultModal'

import './ResultItem.scss'

type Props = {
    className?: string,
    data: ResultItemInterface,
    onClick?: (e: React.MouseEvent) => void,
}

type State = {
    open: boolean,
}

class ResultItem extends Component<Props, State> {
    state: State = {
        open: false
    }

    handleClick = (e: MouseEvent) => {
        e.stopPropagation()

        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let isOpen: boolean = this.state.open

        return (
            <div className={cx('result-item-container', isOpen && 'open', this.props.className)} onClick={this.handleClick}>
                {isOpen && <ResultModal data={this.props.data} />}
                <div className='result-image-wrapper' style={{backgroundImage: `url(${this.props.data.link})`}}></div>
            </div>
        )
    }
}

export default ResultItem
