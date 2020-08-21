import React, { Component } from 'react'

import Heading1 from '../components/typography/Heading1.jsx'
import Menu from '../components/Menu.jsx'
import ResultsContainer from '../components/ResultsContainer.jsx'
import RoomsContainer from '../components/RoomsContainer.jsx'
import StepsNavigation from '../components/StepsNavigation.jsx'
import StylesContainer from '../components/StylesContainer.jsx'

import iconRooms from './../../public/images/icon-rooms.png'
import iconResults from './../../public/images/icon-results.png'
import iconStyles from './../../public/images/icon-styles.png'

import './Home.scss'

const steps = [
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

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentStep: 0
        }
    }

    handleChange(index) {
        this.setState({
            currentStep: index
        })
    }

    renderStepContainer = () => {
        let currentStep = this.state.currentStep,
            stepContainer

        currentStep === 0 ?
            stepContainer = <RoomsContainer />
        : currentStep === 1 ?
            stepContainer = <StylesContainer />
        :
            stepContainer = <ResultsContainer />

        return stepContainer
    }

    render() {
        return (
            <div>
                <Menu />
                <Heading1>How do you want to be inspired today?</Heading1>
                <StepsNavigation steps={steps} handleChange={this.handleChange.bind(this)}/>
                {this.renderStepContainer()}
            </div>
        )
    }
}

export default Home
