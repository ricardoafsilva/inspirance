import React, { Component } from 'react'

import Heading1 from '../components/Typography/Heading1.tsx'
import Menu from '../components/Menu/Menu.tsx'
import ResultsContainer from '../components/Results/ResultsContainer.tsx'
import RoomsContainer from '../components/Rooms/RoomsContainer.tsx'
import StepsNavigation from '../components/Steps/StepsNavigation.tsx'
import StylesContainer from '../components/Styles/StylesContainer.tsx'

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
    selectedRoom: string,
    selectedStyle: string
}

class Home extends Component<{}, State> {
    state: State = {
        currentStep: 0,
        selectedRoom: 'Any room',
        selectedStyle: 'Any style',
    }

    handleChange = (index: number, selectedOption?: object) => {
        this.setState({
            currentStep: index,
            ...selectedOption
        }, () => {
            index === 2 && window.dispatchEvent(
                new CustomEvent('requestResultsList', {
                    detail: {
                        selectedRoom: this.state.selectedRoom,
                        selectedStyle: this.state.selectedStyle
                    }
                })
            )
        })
    }

    renderStepContainer = () => {
        switch (this.state.currentStep) {
            default:
                return <RoomsContainer handleChange={this.handleChange} selectedRoom={this.state.selectedRoom} />
            case 1:
                return <StylesContainer handleChange={this.handleChange} selectedStyle={this.state.selectedStyle} />
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
