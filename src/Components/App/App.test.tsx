import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<App />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render div', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('Component should render Header', () => {
    expect(wrapper.find('Header')).toHaveLength(1)
  })

  it('Component should render MainPage', () => {
    expect(wrapper.find('MainPage')).toHaveLength(1)
  })

  it('Component should render Footer', () => {
    expect(wrapper.find('Footer')).toHaveLength(1)
  })
})
