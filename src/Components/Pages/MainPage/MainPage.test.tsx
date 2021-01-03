import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'

describe('<MainPage /> test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<MainPage />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render main with children', () => {
    expect(wrapper.find('main')).toHaveLength(1)
    expect(wrapper.find('main').children()).toHaveLength(4)
  })

  it('Should render Filter component', () => {
    expect(wrapper.find('Filter')).toHaveLength(1)
  })

  it('Should render UserCardWrapper component', () => {
    expect(wrapper.find('UserCardWrapper')).toHaveLength(1)
  })

  it('Should render ul component', () => {
    expect(wrapper.find('ul')).toHaveLength(1)
  })
})
