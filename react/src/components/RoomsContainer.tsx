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

type Props = {
    handleChange: (index: number) => void,
}

type State = {
    selectItems: string[],
}

class RoomsContainer extends Component<Props, State> {
    state: State = {
        selectItems: defaultRooms
    }

    triggerCustomEvent = (selectedRoom: string) => {
        window.dispatchEvent(
            new CustomEvent('onRoomTypeChange', {
                detail: {
                    selectedRoom
                }
            })
        )

        this.props.handleChange(1)
    }

    setSelectItems = (e: any) => {
        this.setState({
            selectItems: e.detail.rooms
        })
    }

    componentDidMount() {
        window.addEventListener('setRoomsItems', (e) => this.setSelectItems(e))
    }

    componentWillUnmount() {
        window.removeEventListener('setRoomsItems', (e) => this.setSelectItems(e))
    }

    render() {
        return (
            <div className='steps-options-containers rooms'>
                <Paragraph size='small'>Select a room:</Paragraph>
                <SelectInput items={this.state.selectItems} getSelected={this.triggerCustomEvent} />
            </div>
        )
    }
}

export default RoomsContainer
