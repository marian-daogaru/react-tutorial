import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'
const cockpit = (props) => {
  let btnClass = classes.Button
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ')
  }

  let assignedClasses = []
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <Aux>
      <h1>Hi, Im the react app</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Switch me
      </button>
    </Aux>
  )
}

export default cockpit
