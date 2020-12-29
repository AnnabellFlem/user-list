import React from 'react'
import { shallow } from 'enzyme'
import AnswerCell from './index'

describe('AnswerCell test', function () {
  let wrapper: any
  const variant = 'A'

  beforeAll(() => {
    wrapper = shallow(<AnswerCell variant={variant} id="1" />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render div', () => {
    expect(wrapper.find('div')).toBeDefined()
    expect(wrapper.find('div').length).toBeGreaterThan(1)
  })

  it('Should have an m size by default', () => {
    expect(wrapper.find('.answer-cell--m')).toHaveLength(1)
  })

  it(`Should have an span with ${variant} text`, () => {
    expect(wrapper.find('.answer-cell__variant').text()).toBe(variant)
  })
})
