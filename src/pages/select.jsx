import React from 'react'
import Formulaireitem from './Page1'

function select (props) {
  return (
    <div>
<label for={props.for} class="formbold-form-label"> {props.name} </label>
<select
        name={props.name}
        id={props.id}
        value={props.value}
        className={props.className}
        onChange={props.onChange}
      >
        {props.list.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
</div>
  )
}

export default select
