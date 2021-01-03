import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<Footer />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render footer', () => {
    expect(wrapper.find('footer')).toHaveLength(1)
  })

  it('Component should render p', () => {
    expect(wrapper.find('p')).toHaveLength(1)
  })
})
