import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  let btnClass = ''
  if (props.showPersons) {
    btnClass = classes.Red
  }

  let assignedClasses = []
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  console.log(btnClass, props.showPersons, 2222)
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, Im the react app</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Switch me
      </button>
    </div>
  )
}

export default cockpit
