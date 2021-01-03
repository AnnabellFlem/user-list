import React from 'react'
import { shallow } from 'enzyme'
import ErrorMessage from './ErrorMessage'

const mockedData = 'data'

describe('ErrorMessage test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<ErrorMessage>{mockedData}</ErrorMessage>)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render span with text', () => {
    expect(wrapper.find('span')).toHaveLength(1)
    expect(wrapper.find('span').text()).toBe(mockedData)
  })
})
