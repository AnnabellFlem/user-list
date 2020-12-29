import React from 'react'
import classNames from 'classnames'
import './Button.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  Partial<{
    size: 's' | 'm'
    fullWidth: boolean
  }>

const Button: React.FC<Props> = ({
  size = 'm',
  fullWidth,
  children,
  ...rest
}) => {
  const defaultButtonClassName = 'btn'
  const buttonClassNames = classNames(defaultButtonClassName, {
    [`${defaultButtonClassName}--${size}`]: size,
    [`${defaultButtonClassName}--fullWidth`]: fullWidth,
  })

  return (
    <button className={buttonClassNames} {...rest}>
      {children}
    </button>
  )
}

export default Button
