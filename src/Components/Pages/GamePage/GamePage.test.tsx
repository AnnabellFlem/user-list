import React from 'react'
import { mount } from 'enzyme'
import GamePage from './GamePage'

const MOCK_HANDLE_END_GAME = jest.fn()
const MOCK_HANDLE_QUESTION = jest.fn()

describe('<GamePage /> test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = mount(
      <GamePage
        currentNumberQuestion={0}
        handleEndGame={MOCK_HANDLE_END_GAME}
        handleQuestion={MOCK_HANDLE_QUESTION}
      />,
    )
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should render header', () => {
    expect(wrapper.find('header')).toHaveLength(1)
  })

  it('Should render main', () => {
    expect(wrapper.find('main')).toHaveLength(1)
  })

  it('Should render footer', () => {
    expect(wrapper.find('footer')).toHaveLength(1)
  })
})
