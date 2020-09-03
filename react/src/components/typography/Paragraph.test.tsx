import React from 'react'
import { mount, shallow } from 'enzyme'

import Paragraph from './Paragraph'

describe('Testing SelectInput component', () => {
    it('Is getting className from props', () => {
        let className: string = 'class-test',
            component = shallow(<Paragraph />)

        expect(component.find('p').hasClass(className)).toBeFalsy()
        component.unmount()

        component = shallow(<Paragraph className={className} />)
        expect(component.find('p').hasClass(className)).toBeTruthy()
        component.unmount()
    })

    it('Check if children exists', () => {
        let componentContent: string = 'Test content'
        const component = mount(<Paragraph>{componentContent}</Paragraph>)

        expect(component.prop('children')).toMatch(componentContent)

        component.unmount()
    })

    it('Is getting size from props', () => {
        let sizes: Paragraph['props'][] = [{
                size: 'small'
            }, {
                size: 'medium'
            }],
            component = shallow(<Paragraph />)

        expect(sizes.every(item => component.find('p').hasClass(item.size as string))).toBeFalsy()
        component.unmount()

        component = shallow(<Paragraph size={sizes[0].size} />)
        expect(component.find('p').hasClass(sizes[0].size as string)).toBeTruthy()
        component.unmount()

        component = shallow(<Paragraph size={sizes[1].size} />)
        expect(component.find('p').hasClass(sizes[1].size as string)).toBeTruthy()
        component.unmount()
    })
})
