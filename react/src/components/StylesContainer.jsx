import React, { Component } from 'react'
import cx from 'classnames'

import Paragraph from './typography/Paragraph.jsx'
import SelectInput from './SelectInput.jsx'

import './StylesContainer.scss'

const styles = [
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
    }

    static defaultProps = {
        className: '',
    }

    render() {
        return (
            <div className='steps-options-containers rooms'>
                <Paragraph small>Select a style:</Paragraph>
                <SelectInput items={styles} />
            </div>
        )
    }
}

export default StylesContainer
