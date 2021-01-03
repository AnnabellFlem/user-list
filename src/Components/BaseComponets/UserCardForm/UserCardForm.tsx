import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import valid from 'card-validator'
import { User } from '../../../Types/User'
import { initialUserValues } from '../../../Utils/getInitialUserData'
import ErrorMessage from '../ErrorMessage'
import { usersRef } from '../../../Services/firebase'

import '../UserCard/UserCard.scss'
import '../UserCardForm/UserCardForm.scss'

const phoneRegExp = /^\+[(]\d{1,3}[)][ ]\d{3}-\d{3}-\d{2}-\d{2}$/
const UserSchema = yup.object().shape({
  name: yup.string().max(16).required(),
  surname: yup.string().max(20).required(),
  email: yup
    .string()
    .email('Please enter your valid email')
    .required('Please enter your email'),
  phone: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number is not valid, enter format +({country code}) XXX-XXX-XX-XX',
    ),
  credit: yup
    .string()
    .test(
      'test-number',
      'Credit Card number is invalid',
      value => valid.number(value).isValid,
    ),
})

type UserCardFormProps = {
  user?: User
  isMainEditForm?: boolean
  handleCreateClick?: any
  handleSaveClick?: any
  handleCancelClick?: any
}

const UserCardForm: React.FC<UserCardFormProps> = ({
  user,
  isMainEditForm,
  handleCreateClick,
  handleSaveClick,
  handleCancelClick,
}) => {
  const formik = useFormik({
    initialValues: user || initialUserValues,
    validationSchema: UserSchema,
    onSubmit: (values, { resetForm }) => {
      if (isMainEditForm) {
        usersRef.push(values)
      } else {
        usersRef
          .child(`${values.id}`)
          .set(values)
          .then(() => console.log('Data added successfully'))
          .catch(error => console.log('Adding failed with error' + error))
      }
      resetForm()
    },
  })

  return (
    <form
      className={`${isMainEditForm ? 'user__form--main' : ''} user__form`}
      onSubmit={formik.handleSubmit}
    >
      <div className="user__info">
        <label className="user__title">
          Name
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="user__data"
          />
        </label>
        {formik.errors.name && (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        )}
      </div>
      <div className="user__info">
        <label className="user__title">
          Surname
          <input
            id="surname"
            name="surname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.surname}
            className="user__data"
          />
        </label>
        {formik.errors.surname && (
          <ErrorMessage>{formik.errors.surname}</ErrorMessage>
        )}
      </div>
      <div className="user__info">
        <label className="user__title">
          Email
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="user__data"
          />
        </label>
        {formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
      </div>
      <div className="user__info">
        <label className="user__title">
          Phone
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="user__data"
          />
        </label>
        {formik.errors.phone && (
          <ErrorMessage>{formik.errors.phone}</ErrorMessage>
        )}
      </div>
      <div className="user__info">
        <label className="user__title">
          Birthday
          <input
            id="birthday"
            name="birthday"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.birthday}
            className="user__data"
            min="1950-01-01"
            max="2018-12-31"
          />
        </label>
      </div>
      <div className="user__info">
        <label className="user__title">
          Credit card
          <input
            id="credit"
            name="credit"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.credit}
            className="user__data"
          />
        </label>
        {formik.errors.credit && (
          <ErrorMessage>{formik.errors.credit}</ErrorMessage>
        )}
      </div>
      {isMainEditForm ? (
        <button
          type="submit"
          className="user__btn--create"
          onClick={handleCreateClick}
        >
          Create
        </button>
      ) : (
        <div>
          <button
            type="submit"
            className="user__btn--save"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            type="button"
            className="user__btn--cancel"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      )}
    </form>
  )
}

export default UserCardForm
