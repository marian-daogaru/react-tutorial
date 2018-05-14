import React, { Component } from 'react';
import Radium from 'radium'
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'aaa',
        age: 11,
        id:'asda',
      },
      {
        name: 'bbb',
        age: 22,
        id: 'qweqwe',
      },
      {
        name: 'ccc',
        age: 33,
        id: 'zxczc'
      },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 11,
        },
        {
          name: 'bbb',
          age: 22,
        },
        {
          name: 'ccc',
          age: 33,
        },
      ]
    })
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId
    })

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  deletePersonHandler(personIndex) {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const st = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: 8,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )
      st.backgroundColor = 'red'
      st[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, Im the react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          style={st}
          onClick={this.togglePersonsHandler}
        >
          Switch me
        </button>
        {persons}
      </div>
    )
  }
}

export default Radium(App);
