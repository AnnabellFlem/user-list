import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('Component App should render without crashing', () => {
  expect(shallow(<App />).exists()).toBeTruthy()
})
