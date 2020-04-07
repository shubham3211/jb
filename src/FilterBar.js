import React from 'react'

function FilterBar({filter}) {
  return (
    <div>
      {filter.map((filter, index) => <span key={index}>{filter}</span>)}
    </div>
  )
}

export default FilterBar
