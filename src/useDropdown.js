import React, { useState } from 'react'

const useDropdown = (label, defaultState, options) => {
  // label = "Beer is good"
  const [state, setState] = useState(defaultState)

  const id = `id-${label
    .split(' ')
    .join('-')
    .toLowerCase()}`

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  )

  return [state, Dropdown, setState]
}

export default useDropdown
