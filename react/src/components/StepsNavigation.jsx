import React, { Component } from "react"

import StepItem from './StepItem.jsx'

import "./StepsNavigation.scss"

class StepsNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentStep: 0
        }
    }

    handleClick = (index) => (e) => {
        this.props.handleChange(index, e)

        this.setState({
            currentStep: index
        })
    }

    render() {
        const stepsList = this.props.steps.map((step, index) => {
            let currentStep = this.props.currentStep || this.state.currentStep,
                isActive = index === currentStep,
                isDone = index < currentStep

            return <StepItem
                className={isActive ? 'active' : isDone ? 'done' : 'disabled'}
                icon={step.icon}
                onClick={this.handleClick(index)}
                key={`step-item-${index}`}/>
        })

        return (
            <ul className='steps-list'>
                {stepsList}
            </ul>
        )
    }
}

export default StepsNavigation
