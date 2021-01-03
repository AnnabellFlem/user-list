import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<Header />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render header', () => {
    expect(wrapper.find('header')).toHaveLength(1)
  })

  it('Component should render h2', () => {
    expect(wrapper.find('h2')).toHaveLength(1)
  })
})
