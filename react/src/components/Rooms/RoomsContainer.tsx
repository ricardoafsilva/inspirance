import React, { Component } from 'react'
import cx from 'classnames'

import Paragraph from '../Typography/Paragraph'
import SelectInput from '../Forms/SelectInput'

import './RoomsContainer.scss'

const defaultRooms: string[] = [
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
    handleChange: (index: number, selectedRoom: object) => void,
    selectedRoom: string,
}

type State = {
    selectItems: string[],
}

class RoomsContainer extends Component<Props, State> {
    state: State = {
        selectItems: defaultRooms
    }

    getSelected = (selectedRoom: string) => {
        this.props.handleChange(1, {selectedRoom: selectedRoom})
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
                <SelectInput items={this.state.selectItems} selectedItem={this.props.selectedRoom} getSelected={this.getSelected} />
            </div>
        )
    }
}

export default RoomsContainer
