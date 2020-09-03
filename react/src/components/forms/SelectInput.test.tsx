import React from 'react'
import { mount, shallow } from 'enzyme'

import Paragraph from '../Typography/Paragraph'
import SelectInput from './SelectInput'

const testItems: string[] = [
    'Any style',
    'Art deco',
    'Asian zen',
    'Bohemian',
    'Coastal',
    'Contemporary',
    'Country',
    'Eclectic',
    'Farmhouse',
    'Feng shui',
    'French country',
    'Hollywood regency',
    'Industrial',
    'Mid-century',
    'Minimalist',
    'Modern',
    'Nautical',
    'Rustic',
    'Scandinavian',
    'Shabby chic',
    'Traditional',
    'Transitional',
    'Urban'
]

describe('Testing SelectInput component', () => {
    it('Set items from props', () => {
        const component = mount(<SelectInput items={testItems} />)

        // Check if all Paragraphs inside SelectInput including one for Placeholder have been rendered
        expect(component.find(Paragraph)).toHaveLength(testItems.length + 1)

        component.unmount()
    })

    it('SelectInput is toggling', () => {
        const component = mount(<SelectInput items={testItems} />)

        expect(component.state('open')).toBeFalsy()
        expect(component.find('.select-input-container').hasClass('open')).toBeFalsy()

        component.find(Paragraph).first().simulate('click')
        expect(component.state('open')).toBeTruthy()
        expect(component.find('.select-input-container').hasClass('open')).toBeTruthy()

        component.find(Paragraph).first().simulate('click')
        expect(component.state('open')).toBeFalsy()
        expect(component.find('.select-input-container').hasClass('open')).toBeFalsy()

        component.unmount()
    })

    it('Set selectedItem', () => {
        const component = mount(<SelectInput items={testItems} />)
        let selectedIndex: number

        component.find(Paragraph).first().simulate('click')
        component.find(Paragraph).at(4).simulate('click')

        selectedIndex = component.state('selected')

        expect(selectedIndex).toBe(3)
        expect(component.prop('items')[selectedIndex]).toMatch('Bohemian')

        component.unmount()
    })
})
