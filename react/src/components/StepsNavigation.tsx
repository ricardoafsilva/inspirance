import React, { Component, ReactElement } from 'react'

import StepItem from './StepItem.tsx'

import './StepsNavigation.scss'

type Props = typeof StepsNavigation.defaultProps & {
    currentStep: number,
    handleChange: (index: number) => void,
    steps?: StepInterface[],
}

type State = {
    currentStep: number,
}

class StepsNavigation extends Component<Props, State> {
    static defaultProps = {
        currentStep: 0,
    }

    state: State = {
        currentStep: 0,
    }

    handleClick = (index: number) => {
        this.props.handleChange(index)

        this.setState({
            currentStep: index
        })
    }

    render() {
        const stepsList: ReactElement[] = this.props.steps?.map((step: StepInterface, index: number) => {
            let currentStep: number = this.props.currentStep || this.state.currentStep,
                isActive: boolean = index === currentStep,
                isDone: boolean = index < currentStep

            return <StepItem
                className={isActive ? 'active' : isDone ? 'done' : 'disabled'}
                icon={step.icon}
                onClick={() => this.handleClick(index)}
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
