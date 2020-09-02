import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<Menu />)
    })
})
