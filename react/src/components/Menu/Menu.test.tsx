import React from 'react'
import { shallow } from 'enzyme'

import Menu from './Menu'

describe('Testing Menu component', () => {
    it('renders without crashing', () => {
        shallow(<Menu />)
    })
})
