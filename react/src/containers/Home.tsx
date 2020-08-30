import React, { Component } from 'react'

import Heading1 from '../components/typography/Heading1.tsx'
import Menu from '../components/Menu.tsx'
import ResultsContainer from '../components/ResultsContainer.tsx'
import RoomsContainer from '../components/RoomsContainer.tsx'
import StepsNavigation from '../components/StepsNavigation.tsx'
import StylesContainer from '../components/StylesContainer.tsx'

import iconRooms from './../../public/images/icon-rooms.png'
import iconResults from './../../public/images/icon-results.png'
import iconStyles from './../../public/images/icon-styles.png'

import './Home.scss'

const steps: StepInterface[] = [
    {
        title: 'Rooms',
        icon: iconRooms,
    },
    {
        title: 'Styles',
        icon: iconStyles
    },
    {
        title: 'Results',
        icon: iconResults,
    }
]

type State = {
    currentStep: number,
}

class Home extends Component<{}, State> {
    state: State = {
        currentStep: 0,
    }

    handleChange = (index: number) => {
        this.setState({
            currentStep: index
        })
    }

    renderStepContainer = () => {
        switch (this.state.currentStep) {
            default:
                return <RoomsContainer handleChange={this.handleChange} />
            case 1:
                return <StylesContainer handleChange={this.handleChange} />
            case 2:
                return <ResultsContainer />
        }
    }

    render() {
        return (
            <div>
                <Menu />
                <Heading1>How do you want to be inspired today?</Heading1>
                <StepsNavigation currentStep={this.state.currentStep} steps={steps} handleChange={this.handleChange} />
                {this.renderStepContainer()}
            </div>
        )
    }
}

export default Home
