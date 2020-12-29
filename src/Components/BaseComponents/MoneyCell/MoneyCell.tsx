import React from 'react'
import classNames from 'classnames'
import './MoneyCell.css'
import MoneyCellIcon from '../../../assets/MoneyCellIcon'

type Props = React.HtmlHTMLAttributes<HTMLDivElement> &
  Partial<{
    size: 's' | 'm'
    active: boolean
    disabled: boolean
  }>

const MoneyCell: React.FC<Props> = ({
  size = 'm',
  active,
  disabled,
  children,
  ...rest
}) => {
  const defaultCellClassName = 'money-cell'
  const cellTextClassName = `${defaultCellClassName}__text`

  const cellClassNames = classNames(defaultCellClassName, {
    [`${defaultCellClassName}--${size}`]: size,
    [`${defaultCellClassName}--active`]: active,
    [`${defaultCellClassName}--disabled`]: disabled,
  })

  return (
    <div className={cellClassNames} {...rest}>
      <hr className={`${defaultCellClassName}__line`} />
      <MoneyCellIcon
        className={`${defaultCellClassName}__icon`}
        iconSize={size}
      />
      <span className={cellTextClassName}>{children}</span>
    </div>
  )
}

export default MoneyCell
