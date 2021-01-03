import React from 'react'
import { shallow } from 'enzyme'
import Filter from './Filter'

const mockedData = 'data'
const onChangeMock = jest.fn()

describe('Filter test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<Filter input={mockedData} onChange={onChangeMock} />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render div', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('Component should render input with data', () => {
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('input').props().value).toBe(mockedData)
  })
})
