import React from 'react'
import { mount, shallow } from 'enzyme'

import Heading1 from './Heading1'

describe('Testing SelectInput component', () => {
    it('Is getting className from props', () => {
        let className: string = 'class-test',
            component = shallow(<Heading1 />)

        expect(component.find('h1').hasClass(className)).toBeFalsy()
        component.unmount()

        component = shallow(<Heading1 className={className} />)
        expect(component.find('h1').hasClass(className)).toBeTruthy()

        component.unmount()
    })

    it('Check if children exists', () => {
        let componentContent:string = 'Test content'
        const component = mount(<Heading1>{componentContent}</Heading1>)

        expect(component.prop('children')).toMatch(componentContent)

        component.unmount()
    })
})
