import React from 'react'
import { shallow } from 'enzyme'
import MoneyCell from './index'

describe('MoneyCell test', function () {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<MoneyCell />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render div', () => {
    expect(wrapper.find('div')).toBeDefined()
    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('Should have an m size by default', () => {
    expect(wrapper.find('.money-cell--m')).toHaveLength(1)
  })

  it('Should have fullWidth prop', () => {
    wrapper = shallow(<MoneyCell active />)
    expect(wrapper.find('.money-cell--active')).toHaveLength(1)
  })
})
