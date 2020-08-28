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

interface Step {
    title: string;
    icon: string;
}

const Steps: Step[] = [
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
    currentStep: number
}

class Home extends Component<State> {
    state: State = {
        currentStep: 0,
    }

    handleChange(index, e) {
        this.setState({
            currentStep: index
        })
    }

    renderStepContainer = () => {
        let currentStep = this.state.currentStep,
            stepContainer

        currentStep === 0 ?
            stepContainer = <RoomsContainer handleChange={this.handleChange.bind(this)} />
        : currentStep === 1 ?
            stepContainer = <StylesContainer handleChange={this.handleChange.bind(this)} />
        :
            stepContainer = <ResultsContainer />

        return stepContainer
    }

    render() {
        return (
            <div>
                <Menu />
                <Heading1>How do you want to be inspired today?</Heading1>
                <StepsNavigation currentStep={this.state.currentStep} steps={Steps} handleChange={this.handleChange.bind(this)}/>
                {this.renderStepContainer()}
            </div>
        )
    }
}

export default Home
