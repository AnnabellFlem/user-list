import React, { useEffect, useState } from 'react'
import './Header.css'
import { ReactComponent as CloseIcon } from '../../../../Images/svg/close.svg'
import { ReactComponent as BurgerIcon } from '../../../../Images/svg/menu.svg'
import MoneyCell from '../../../BaseComponents/MoneyCell'
import classNames from 'classnames'
import useMedia from 'use-media'
import { MEDIA_QUERY_TABLET } from '../../../../Constants/MediaQueries'
import { moneyArray } from '../../../../Services/mockData'
import { MoneyListType } from '../../../../Types'

type Props = {
  handleBtnClick: () => void
  currentNumberQuestion: number
}

const Header: React.FC<Props> = ({ handleBtnClick, currentNumberQuestion }) => {
  const isWide = useMedia(MEDIA_QUERY_TABLET)
  const [closeIcon, setCloseIcon] = useState(false)
  const [activeRound, setActiveRound] = useState(currentNumberQuestion)

  const openText = 'Open list of money levels'
  const closeText = 'Close list of money levels'

  const iconClick = () => {
    setCloseIcon(!closeIcon)
    handleBtnClick()
  }

  const defaultHeaderClassName = 'Header'
  const headerClassNames = classNames(defaultHeaderClassName, {
    [`${defaultHeaderClassName}--close`]: closeIcon,
  })

  useEffect(() => {
    setActiveRound(currentNumberQuestion)
  }, [currentNumberQuestion])

  const DesktopMenu = (array: MoneyListType) => {
    return (
      <nav className={`${defaultHeaderClassName}__nav`}>
        <ul className={`${defaultHeaderClassName}__list`}>
          {array
            .map((item, index) => {
              return (
                <li key={item} className={`${defaultHeaderClassName}__item`}>
                  <MoneyCell
                    active={activeRound === index}
                    disabled={activeRound > index}
                  >
                    {item}
                  </MoneyCell>
                </li>
              )
            })
            .reverse()}
        </ul>
      </nav>
    )
  }

  const MobileMenu = (array: MoneyListType) => {
    return (
      <>
        <button
          className={`${defaultHeaderClassName}__menu`}
          aria-label={closeIcon ? closeText : openText}
          onClick={() => iconClick()}
        >
          {closeIcon ? <CloseIcon tabIndex={0} /> : <BurgerIcon tabIndex={0} />}
        </button>
        {closeIcon && (
          <nav className={`${defaultHeaderClassName}__nav`}>
            <ul className={`${defaultHeaderClassName}__list`}>
              {array
                .map((item, index) => {
                  return (
                    <li
                      key={item}
                      className={`${defaultHeaderClassName}__item`}
                    >
                      <MoneyCell
                        active={activeRound === index}
                        disabled={activeRound > index}
                        size={'s'}
                      >
                        {item}
                      </MoneyCell>
                    </li>
                  )
                })
                .reverse()}
            </ul>
          </nav>
        )}
      </>
    )
  }

  return (
    <header className={`${headerClassNames}`}>
      {isWide ? DesktopMenu(moneyArray) : MobileMenu(moneyArray)}
    </header>
  )
}

export default Header
