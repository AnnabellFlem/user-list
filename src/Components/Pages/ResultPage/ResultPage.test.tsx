import React from 'react'
import { shallow } from 'enzyme'
import ResultPage from './index'

const MOCK_HANDLE_BTN_CLICK = jest.fn()
const MOCK_HANDLE_RESULT = jest.fn()

describe('ResultPage test', function () {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(
      <ResultPage
        currentNumberQuestion={0}
        win
        handleResult={MOCK_HANDLE_RESULT}
        onButtonClick={MOCK_HANDLE_BTN_CLICK}
      />,
    )
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render component', () => {
    expect(wrapper.find('main')).toBeDefined()
    expect(wrapper.find('main')).toHaveLength(1)
  })
})
