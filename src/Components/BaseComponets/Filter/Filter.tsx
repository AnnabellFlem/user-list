import React from 'react'
import './Filter.scss'

type FilterProps = {
  input: string
  onChange: any
}

const Filter: React.FC<FilterProps> = ({
  input: keyword,
  onChange: setKeyword,
}) => {
  const BarStyling = {
    width: '20rem',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
  }
  return (
    <input
      style={BarStyling}
      key="key123"
      value={keyword}
      placeholder={'Search user name'}
      onChange={e => setKeyword(e.target.value)}
    />
  )
}

export default Filter
