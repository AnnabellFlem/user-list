import React from 'react'
import { mount } from 'enzyme'
import MainLayout from './MainLayout'

const MOCK_HANDLE_CURR_QUESTION = jest.fn()
const MOCK_HANDLE_END_GAME = jest.fn()

describe('<MainLayout /> test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = mount(
      <MainLayout
        currentNumberQuestion={0}
        handleEndGame={MOCK_HANDLE_END_GAME}
        handleCurrentQuestion={MOCK_HANDLE_CURR_QUESTION}
      />,
    )
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
