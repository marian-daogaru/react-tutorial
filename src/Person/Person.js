import React from 'react'
import Radium from 'radium'

const person = (props) => {
  const style = {
    '@media (min-widthL 500px)': {
      width: '450px'
    }
  }

  return (
    <div
      className='Person'
      style={style}
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
