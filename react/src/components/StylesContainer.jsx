import React, { Component } from 'react'
import cx from 'classnames'

import Paragraph from './typography/Paragraph.jsx'
import SelectInput from './forms/SelectInput.jsx'

import './StylesContainer.scss'

const defaultStyles = [
    'Any style',
    'Art deco',
    'Asian zen',
    'Bohemian',
    'Coastal',
    'Contemporary',
    'Country',
    'Eclectic',
    'Farmhouse',
    'Feng shui',
    'French country',
    'Hollywood regency',
    'Industrial',
    'Mid-century',
    'Minimalist',
    'Modern',
    'Nautical',
    'Rustic',
    'Scandinavian',
    'Shabby chic',
    'Traditional',
    'Transitional',
    'Urban'
]

class StylesContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectItems: defaultStyles
        }
    }

    static defaultProps = {
        className: '',
    }

    triggerCustomEvent(selectedStyle) {
        window.dispatchEvent(
            new CustomEvent('onStyleTypeChange', {
                detail: {
                    selectedStyle
                }
            })
        )

        this.props.handleChange(2)
    }

    setSelectItems = (event) => {
        this.setState({
            selectItems: event.detail.styles
        })
    }

    componentDidMount() {
        window.addEventListener('setStylesItems', this.setSelectItems)
    }

    componentWillUnmount() {
        window.removeEventListener('setStylesItems', this.setSelectItems)
    }

    render() {
        return (
            <div className='steps-options-containers rooms'>
                <Paragraph small>Select a style:</Paragraph>
                <SelectInput items={this.state.selectItems} getSelected={this.triggerCustomEvent.bind(this)} />
            </div>
        )
    }
}

export default StylesContainer
