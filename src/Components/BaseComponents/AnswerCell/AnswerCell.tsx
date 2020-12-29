import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import './AnswerCell.css'
import AnswerCellIcon from '../../../assets/AnswerCellIcon'

type Props = React.HTMLProps<HTMLInputElement> &
  Partial<{
    sizeCell: 's' | 'm'
    active: boolean
    correct: boolean
    wrong: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }> & { variant: string; id: string }

const AnswerCell: React.FC<Props> = ({
  sizeCell = 'm',
  id,
  onChange,
  variant,
  active,
  correct,
  wrong,
  checked,
  children,
  ...rest
}) => {
  const [checkedItem, setCheckedItem] = useState(checked)

  useEffect(() => {
    setCheckedItem(checked)
  }, [checked])

  const defaultCellClassName = 'answer-cell'
  const cellTextClassName = `${defaultCellClassName}__text`
  const cellVariantClassName = `${defaultCellClassName}__variant`

  const cellClassNames = classNames(defaultCellClassName, {
    [`${defaultCellClassName}--${sizeCell}`]: sizeCell,
    [`${defaultCellClassName}--active`]: active,
    [`${defaultCellClassName}--correct`]: correct,
    [`${defaultCellClassName}--wrong`]: wrong,
  })

  const handleChange = (e: any) => {
    onChange && onChange(e)
    setCheckedItem(!checkedItem)
  }

  return (
    <div className={cellClassNames}>
      <div className={`${defaultCellClassName}__wrapper`}>
        <input
          type="checkbox"
          onChange={handleChange}
          className={`${defaultCellClassName}__input`}
          id={id}
          checked={checkedItem}
          {...rest}
        />
        <label htmlFor={id} className={`${defaultCellClassName}__label`}>
          <AnswerCellIcon
            className={`${defaultCellClassName}__icon`}
            iconSize={sizeCell}
          />
          <span className={cellTextClassName}>
            {variant && <span className={cellVariantClassName}>{variant}</span>}
            {children}
          </span>
        </label>
        <hr className={`${defaultCellClassName}__line`} />
      </div>
    </div>
  )
}

export default AnswerCell
