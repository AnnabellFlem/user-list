import React from 'react'
import { shallow } from 'enzyme'
import StartPage from './index'

describe('StartPage test', function () {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<StartPage />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render component', () => {
    expect(wrapper.find('main')).toBeDefined()
    expect(wrapper.find('main')).toHaveLength(1)
  })
})
