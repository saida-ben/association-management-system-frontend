import React from 'react'
import Formulaireitem from './Page1'

function Item (props) {
  return (
    <div>
<label for={props.for} class="formbold-form-label text-right"> {props.name} </label>
  <input 
type={props.type}
name={props.name}
id={props.id}
value={props.value}
placeholder={props.placeholder}
className={props.className}
onChange={props.onChange}



  />     
</div>
  )
}

export default Item
