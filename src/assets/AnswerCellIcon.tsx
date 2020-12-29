import React from 'react'

type iconType = React.HTMLProps<SVGElement> & { iconSize: 's' | 'm' }

const AnswerCellIcon: React.FC<iconType> = ({ className, iconSize }) => {
  if (iconSize === 'm') {
    return (<svg width="390" height="72" viewBox="0 0 390 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.8825 5.08639C26.055 2.19863 29.4585 0.5 33.0722 0.5H356.928C360.542 0.5 363.945 2.19863 366.118 5.08639L389.374 36L366.118 66.9136C363.945 69.8014 360.541 71.5 356.928 71.5H33.0722C29.4585 71.5 26.055 69.8014 23.8825 66.9136L0.625694 36L23.8825 5.08639Z" fill="white" stroke="#D0D0D8" className={ className } />
    </svg>)
  } else if (iconSize === 's') {
    return (<svg width="288" height="56" viewBox="0 0 288 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z" fill="white" stroke="#D0D0D8" className={ className } />
    </svg>
    )
  } else return null
}

export default AnswerCellIcon
