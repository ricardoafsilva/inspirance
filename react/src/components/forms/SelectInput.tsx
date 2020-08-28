import React, { Component } from 'react'
import cx from 'classnames'

import iconArrow from './../../../public/images/icon-gray-arrow.png'
import Paragraph from '../typography/Paragraph.tsx'

import './SelectInput.scss'

class SelectInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            selected: 0
        }
    }

    static defaultProps = {
        className: '',
        items: []
    }

    getSelected = () => {
        return this.props.items[this.state.selected]
    }

    handleClick = (index) => (e) => {
        e.stopPropagation()

        let isDifferentSelected = index !== this.state.selected

        this.setState({
            open: !this.state.open,
            selected: index
        }, () => {if(this.props.getSelected && isDifferentSelected) this.props.getSelected(this.getSelected())})
    }

    render() {
        let props = this.props
        let items = props.items.map((item, index) => {
            let selected = index === this.state.selected

            return <Paragraph className={selected && 'selected'} onClick={this.handleClick(index)} key={`select-input-${index}`}>{item}</Paragraph>
        })
        items = [<Paragraph className='placeholder' onClick={this.handleClick(this.state.selected)} key='select-input-first'>{props.items[this.state.selected]}</Paragraph>, ...items]

        return (
            <div className={cx('select-input-container', this.state.open && 'open')}>
                <img className='select-icon' src={iconArrow} />
                {items}
            </div>
        )
    }
}

export default SelectInput
