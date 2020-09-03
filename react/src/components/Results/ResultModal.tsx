import React, { Component, MouseEvent } from 'react'
import cx from 'classnames'

import Heading5 from '../Typography/Heading5'
import iconExternalLink from '../../../public/images/icon-external-link.png'
import iconCloseRound from '../../../public/images/icon-close-round.png'

import './ResultModal.scss'

type Props = {
    data: ResultItemInterface,
}

class ResultModal extends Component<Props> {
    handleClick = (e: MouseEvent) => {
        e.stopPropagation()
    }

    render() {
        return (
            <div className='result-modal-container'>
                <span className='close-modal-container'>
                    <img className='icon-round-close' src={iconCloseRound} />
                </span>
                <div className='result-content-container' onClick={this.handleClick}>
                    <a className='heading-contaier' target='_blank' href={this.props.data.image.contextLink}>
                        <Heading5 className='left'>{this.props.data.title}</Heading5>
                        <span className='external-link-anchor'>
                            <img className='icon-external-link' src={iconExternalLink} />
                        </span>
                    </a>
                    <a className='image-link-anchor' target='_blank' href={this.props.data.image.contextLink}>
                        <img className='result-image' src={this.props.data.link} />
                    </a>
                </div>
            </div>
        )
    }
}

export default ResultModal
