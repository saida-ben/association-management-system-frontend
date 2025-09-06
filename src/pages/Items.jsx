import React from 'react'
import Formulaireitem from './Page1'

function Items (props) {
  return (
    <div>
<label for={props.for} class="formbold-form-label text-right"> {props.name} </label>
       
</div>
  )
}

export default Items
