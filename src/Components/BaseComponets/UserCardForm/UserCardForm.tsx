import React from 'react'
import { User } from '../../../Types/User'
import { useFormik } from 'formik'
import { initialUserValues } from '../../../Utils/getInitialUserData'
import * as yup from 'yup'

const phoneRegExp = /^\+\d{1,3}-\d{3}-\d{3}-\d{2}-\d{2}$/
const UserSchema = yup.object().shape({
  name: yup.string().max(16).required(),
  surname: yup.string().max(20).required(),
  email: yup.string().email().required('Please Enter your Email'),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
})

type UserCardFormProps = {
  user: User
  isMainEditForm: boolean
}

const UserCardForm: React.FC<UserCardFormProps> = ({
  user,
  isMainEditForm,
}) => {
  const formik = useFormik({
    initialValues: isMainEditForm ? initialUserValues : user,
    validationSchema: UserSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <li className="user" id={`user-${user.id}`}>
      <form onSubmit={formik.handleSubmit}>
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
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
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
          {formik.errors.surname ? <div>{formik.errors.surname}</div> : null}
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
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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
          {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
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
        <button type="submit">Submit</button>
      </form>
    </li>
  )
}

export default UserCardForm
