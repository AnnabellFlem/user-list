import React from 'react'
import { mount } from 'enzyme'
import MainPage from './MainPage'

describe('<MainPage /> test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = mount(<MainPage />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
