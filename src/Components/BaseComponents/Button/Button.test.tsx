import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('MoneyCell test', function () {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<Button />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render button', () => {
    expect(wrapper.find('button')).toBeDefined()
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('Should have an m size by default', () => {
    expect(wrapper.find('.btn--m')).toHaveLength(1)
  })

  it('Should have fullWidth prop', () => {
    wrapper = shallow(<Button fullWidth />)
    expect(wrapper.find('.btn--fullWidth')).toHaveLength(1)
  })
})
