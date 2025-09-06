import React from 'react'
import Formulaireitem from './Page1'

function Formulaire (props) {
  return (
    <div class="w-full md:w-1/4 px-3">

        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name">
         {props.title}
        </label>
        <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
type={props.type}
name={props.name}
id={props.id}
value={props.value}
placeholder={props.title}
className={props.className}
onChange={props.onChange}
list={props.list}


  />     
        
    
</div>
  )
}

export default Formulaire
