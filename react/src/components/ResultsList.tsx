import React, { Component } from 'react'
import cx from 'classnames'

import ResultItem from './ResultItem.tsx'

import './ResultsList.scss'

class ResultsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: null
        }
    }

    static defaultProps = {
        className: '',
    }

    handleClick = (index) => (e) => {
        e.stopPropagation()

        this.setState({
            selected: index
        })
    }

    render() {
        let props = this.props
        let items = props.items.map((item, index) => {
            let selected = index === this.state.selected

            return <ResultItem className={selected && 'selected'} data={item} onClick={this.handleClick(index)} key={`result-item-${index}`} />
        })

        return (
            <div className='query-results-container'>
                {items}
            </div>
        )
    }
}

export default ResultsList
