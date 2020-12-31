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
  return (
    <div className="filter">
      <input
        className="filter__input"
        key="key123"
        value={keyword}
        placeholder={'Search user name'}
        onChange={e => setKeyword(e.target.value)}
      />
    </div>
  )
}

export default Filter
