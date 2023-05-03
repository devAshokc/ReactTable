import React from 'react'

export const ColumnFilter = ( {column}) => {
    const { filterValue, setFilter } = column
  return (
    <span >
        <label htmlFor='Search'>Search: {' '}</label>
        <input value= {filterValue || ''} id='Search'  onChange={(e)=> setFilter 
        (e.target.value)} />
    </span>
  )
}
