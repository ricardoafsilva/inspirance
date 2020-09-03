import React from 'react'
import { mount, shallow } from 'enzyme'

import Heading5 from './Heading5'

describe('Testing SelectInput component', () => {
    it('Is getting className from props', () => {
        let className: string = 'class-test',
            component = shallow(<Heading5 />)

        expect(component.find('h5').hasClass(className)).toBeFalsy()
        component.unmount()

        component = shallow(<Heading5 className={className} />)
        expect(component.find('h5').hasClass(className)).toBeTruthy()
        component.unmount()
    })

    it('Check if children exists', () => {
        let componentContent:string = 'Test content'
        const component = mount(<Heading5>{componentContent}</Heading5>)

        expect(component.prop('children')).toMatch(componentContent)

        component.unmount()
    })
})
