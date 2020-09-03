import React, { Component, MouseEvent } from 'react'
import cx from 'classnames'

import ResultItem from './ResultItem'

import './ResultsList.scss'

type Props = {
    items: ResultItemInterface[],
}

type State = {
    selected: number | null,
}

class ResultsList extends Component<Props, State> {
    state: State = {
        selected: null
    }

    handleClick = (index: number) => (e: MouseEvent) => {
        e.stopPropagation()

        this.setState({
            selected: index
        })
    }

    render() {
        let items: JSX.Element[] = this.props.items.map((item: ResultItemInterface, index: number) => {
            let selected: boolean = index === this.state.selected

            return <ResultItem
                className={selected ? 'selected' : ''}
                data={item}
                onClick={this.handleClick(index)}
                key={`result-item-${index}`} />
        })

        return (
            <div className='query-results-container'>
                {items}
            </div>
        )
    }
}

export default ResultsList
