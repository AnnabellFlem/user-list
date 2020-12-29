import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'

const MOCK_HANDLE_FUNC = jest.fn()

describe('<Header /> test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = mount(
      <Header handleBtnClick={MOCK_HANDLE_FUNC} currentNumberQuestion={0} />,
    )
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Component should render header', () => {
    expect(wrapper.find('header')).toHaveLength(1)
  })
})
