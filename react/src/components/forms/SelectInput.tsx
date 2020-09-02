import React, { Component, MouseEvent } from 'react'
import cx from 'classnames'

import Paragraph from '../Typography/Paragraph.tsx'

import iconArrow from './../../../public/images/icon-gray-arrow.png'

import './SelectInput.scss'

type Props = {
    items: string[],
    getSelected?: (selectedRoom: string) => void,
    selectedItem?: string | number
}

type State = {
    open: boolean,
    selected: number,
}

class SelectInput extends Component<Props, State> {
    getSelectedFromProps = () => {
        let selectedFromProps = this.props.selectedItem

        if(selectedFromProps) {
            if(typeof selectedFromProps == 'number') {
                return selectedFromProps
            } else {
                return this.props.items.indexOf(selectedFromProps)
            }
        }
    }
    
    state: State = {
        open: false,
        selected: this.getSelectedFromProps() || 0
    }

    getSelected = () => {
        return this.props.items[this.state.selected]
    }

    handleClick = (index: number) => (e: MouseEvent) => {
        e.stopPropagation()

        let isDifferentSelected: boolean = index !== this.state.selected

        this.setState({
            open: !this.state.open,
            selected: index
        }, () => {if(this.props.getSelected && isDifferentSelected) this.props.getSelected(this.getSelected())})
    }

    render() {
        let propItems: string[] = this.props.items
        let items: JSX.Element[] = propItems.map((item: string, index: number) => {
            let selected: boolean = index === this.state.selected

            return <Paragraph
                className={selected ? 'selected' : ''}
                onClick={this.handleClick(index)}
                key={`select-input-${index}`}>
                    {item}
                </Paragraph>
        })
        items = [<Paragraph className='placeholder' onClick={this.handleClick(this.state.selected)} key='select-input-first'>{propItems[this.state.selected]}</Paragraph>, ...items]

        return (
            <div className={cx('select-input-container', this.state.open && 'open')}>
                <img className='select-icon' src={iconArrow} />
                {items}
            </div>
        )
    }
}

export default SelectInput
