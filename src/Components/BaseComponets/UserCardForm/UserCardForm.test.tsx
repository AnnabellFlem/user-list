import React from 'react'
import { shallow } from 'enzyme'
import UserCardForm from './UserCardForm'

const mockedData = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  email: 'email',
  phone: 'phone',
  birthday: 'birthday',
  credit: 'credit',
}

describe('UserCardForm test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<UserCardForm user={mockedData} />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render form', () => {
    expect(wrapper.find('form')).toHaveLength(1)
  })

  it('Component should render user info in input values', () => {
    expect(wrapper.find('input').at(0).props().value).toBe(mockedData.name)
    expect(wrapper.find('input').at(1).props().value).toBe(mockedData.surname)
  })
})
