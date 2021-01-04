import React from 'react'
import { shallow } from 'enzyme'
import UserCard from './UserCard'

const mockedDataFull = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  email: 'email',
  phone: 'phone',
  birthday: 'birthday',
  credit: 'credit',
}

const mockedData = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  email: 'email',
  phone: '',
  birthday: '',
  credit: '',
}

const mockedHandleClick = jest.fn()

describe('UserCard test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(
      <UserCard user={mockedDataFull} handleClick={mockedHandleClick} />,
    )
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render li', () => {
    expect(wrapper.find('li')).toHaveLength(1)
  })

  it('Component should render user info', () => {
    expect(wrapper.find('.user__data').at(0).text()).toBe(mockedData.name)
    expect(wrapper.find('.user__data').at(1).text()).toBe(mockedData.surname)
  })

  it(`Component should render ${
    Object.keys(mockedDataFull).length - 1
  } elements when all data passed`, () => {
    expect(wrapper.find('.user__data')).toHaveLength(6)
  })

  it(`Component should render elements with only required fields`, () => {
    wrapper = shallow(
      <UserCard user={mockedData} handleClick={mockedHandleClick} />,
    )
    expect(wrapper.find('.user__data')).toHaveLength(3)
  })

  it('Component should render button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
