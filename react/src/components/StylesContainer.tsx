import React, { Component } from 'react'
import cx from 'classnames'

import Paragraph from './typography/Paragraph.tsx'
import SelectInput from './forms/SelectInput.tsx'

import './StylesContainer.scss'

const defaultStyles: string[] = [
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

type Props = {
    handleChange: (index: number) => void,
}

type State = {
    selectItems: string[],
}

class StylesContainer extends Component<Props, State> {
    state: State = {
        selectItems: defaultStyles
    }

    triggerCustomEvent = (selectedStyle: string) => {
        window.dispatchEvent(
            new CustomEvent('onStyleTypeChange', {
                detail: {
                    selectedStyle
                }
            })
        )

        this.props.handleChange(2)
    }

    setSelectItems = (e: any) => {
        this.setState({
            selectItems: e.detail.styles
        })
    }

    componentDidMount() {
        window.addEventListener('setStylesItems', (e) => this.setSelectItems(e))
    }

    componentWillUnmount() {
        window.removeEventListener('setStylesItems', (e) => this.setSelectItems(e))
    }

    render() {
        return (
            <div className='steps-options-containers rooms'>
                <Paragraph size='small'>Select a style:</Paragraph>
                <SelectInput items={this.state.selectItems} getSelected={this.triggerCustomEvent} />
            </div>
        )
    }
}

export default StylesContainer
