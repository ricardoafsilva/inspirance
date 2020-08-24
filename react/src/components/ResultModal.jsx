import React, { Component } from 'react'
import cx from 'classnames'

import Heading5 from './typography/Heading5.jsx'
import iconExternalLink from './../../public/images/icon-external-link.png'
import iconCloseRound from './../../public/images/icon-close-round.png'

import './ResultModal.scss'

class ResultModal extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        className: '',
    }

    handleClick = (e) => {
        e.stopPropagation()
    }

    render() {
        let props = this.props

        return (
            <div className='result-modal-container'>
                <span className='close-modal-container'>
                    <img className='icon-round-close' src={iconCloseRound} />
                </span>
                <div className='result-content-container' onClick={this.handleClick}>
                    <a className='heading-contaier' target='_blank' href={props.data.image.contextLink}>
                        <Heading5 className='left'>{props.data.title}</Heading5>
                        <span className='external-link-anchor'>
                            <img className='icon-external-link' src={iconExternalLink} />
                        </span>
                    </a>
                    <a className='image-link-anchor' target='_blank' href={props.data.image.contextLink}>
                        <img className='result-image' src={props.data.link} />
                    </a>
                </div>
            </div>
        )
    }
}

export default ResultModal
