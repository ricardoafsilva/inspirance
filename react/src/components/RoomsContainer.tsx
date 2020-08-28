import React, { Component } from 'react'
import cx from 'classnames'

import Paragraph from './typography/Paragraph.tsx'
import SelectInput from './forms/SelectInput.tsx'

import './RoomsContainer.scss'

const defaultRooms = [
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

        this.state = {
            selectItems: defaultRooms
        }
    }

    static defaultProps = {
        className: '',
    }

    triggerCustomEvent(selectedRoom) {
        window.dispatchEvent(
            new CustomEvent('onRoomTypeChange', {
                detail: {
                    selectedRoom
                }
            })
        )

        this.props.handleChange(1)
    }

    setSelectItems = (event) => {
        this.setState({
            selectItems: event.detail.rooms
        })
    }

    componentDidMount() {
        window.addEventListener('setRoomsItems', this.setSelectItems)
    }

    componentWillUnmount() {
        window.removeEventListener('setRoomsItems', this.setSelectItems)
    }

    render() {
        return (
            <div className='steps-options-containers rooms'>
                <Paragraph small>Select a room:</Paragraph>
                <SelectInput items={this.state.selectItems} getSelected={this.triggerCustomEvent.bind(this)} />
            </div>
        )
    }
}

export default RoomsContainer
