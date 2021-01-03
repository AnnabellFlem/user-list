import React from 'react'
import { shallow } from 'enzyme'
import UserCardWrapper from './UserCardWrapper'
import { MAIN_EDIT_FORM_TYPE } from '../../../Constants/User'

const mockedData = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  email: 'email',
  phone: 'phone',
  birthday: 'birthday',
  credit: 'credit',
}

describe('UserCardWrapper test', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = shallow(<UserCardWrapper user={mockedData} />)
  })

  it('should to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Component should render UserCard', () => {
    expect(wrapper.find('UserCard')).toHaveLength(1)
  })

  it('Component should render UserFormCard', () => {
    wrapper = shallow(
      <UserCardWrapper user={mockedData} editFormType={MAIN_EDIT_FORM_TYPE} />,
    )
    expect(wrapper.find('UserCardForm')).toHaveLength(1)
  })
})
