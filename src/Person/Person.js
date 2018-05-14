import React from 'react'
import Radium from 'radium'

const person = (props) => {
  return (
    <div
      className='Person'
    >
      <p onClick={props.click}>Im a {props.name} and Im {props.age} yo</p>
      <p>{props.children}</p>
      <input
        type='text'
        onChange={props.changed}
        value={props.name}
      />
    </div>
  )
}

export default Radium(person)
