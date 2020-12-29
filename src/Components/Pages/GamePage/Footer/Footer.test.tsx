import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('<Footer /> test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<Footer />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component Footer should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Component should render footer', () => {
    expect(wrapper.find('footer')).toHaveLength(1)
  })
})
