import React, { Component } from 'react'
import cx from 'classnames'

import Paragraph from './typography/Paragraph.jsx'
import SelectInput from './forms/SelectInput.jsx'

import './RoomsContainer.scss'

const rooms = [
    'Any room',
    'Attic',
    'Balcony',
    'Basement',
    'Bathroom',
    'Bedroom',
    'Dining room',
    'Games room',
    'Garage',
    'Kitchen',
    'Library',
    'Living room',
    'Loft',
    'Mud room',
    'Nursery',
    'Office',
    'Utility room',
    'Wine cellar'
]

class RoomsContainer extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        className: '',
    }

    render() {
        return (
            <div className='steps-options-containers rooms'>
                <Paragraph small>Select a room:</Paragraph>
                <SelectInput items={rooms} />
            </div>
        )
    }
}

export default RoomsContainer
