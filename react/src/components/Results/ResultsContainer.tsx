import React, { Component } from 'react'
import cx from 'classnames'

import Paragraph from '../Typography/Paragraph.tsx'
import ResultsList from './ResultsList.tsx'

import './ResultsContainer.scss'

type State = {
    items: ResultItemInterface[] | [],
    query: string
}

class ResultsContainer extends Component<{}, State> {
    state: State = {
        items: [],
        query: ''
    }

    setResultsItems = (e: any) => {
        this.setState({
            items: e.detail.results,
            query: `${e.detail.selectedRoom} ${e.detail.selectedStyle}`
        })
    }

    componentDidMount() {
        window.addEventListener('setResultsItems', (e) => this.setResultsItems(e))
    }

    componentWillUnmount() {
        window.removeEventListener('setResultsItems', (e) => this.setResultsItems(e))
    }

    render() {
        return (
            <div className='main-results-container'>
                <div className='steps-options-containers results'>
                    <Paragraph size='small'>Inspirations for:</Paragraph>
                    <Paragraph size='medium'>{this.state.query}</Paragraph>
                </div>
                <ResultsList items={this.state.items} />
            </div>
        )
    }
}

export default ResultsContainer
