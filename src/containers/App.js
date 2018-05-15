import React, { PureComponent } from 'react'
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('App.js inside constructor', props)

    this.state = {
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
      toggleClicked: 0,
    }
  }

  componentWillMount() {
    console.log('App.js componenet will mount')
  }

  componentDidMount() {
    console.log('App.js componenet did mount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('App.js update inside should component update', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextPros, nextState) {
    console.log('App.js inside componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('App.js inside componentDidUpdate')
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
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  deletePersonHandler(personIndex) {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    console.log('App.js inside render')
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler.bind(this)}
        changed={this.nameChangedHandler.bind(this)}
      />
    }


    return (
      <Aux>
        <button
          onClick={() => {this.setState({showPersons: true})}}
        >
          Show Persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler.bind(this)}
        />
        {persons}
      </Aux>
    )
  }
}

export default withClass(App, classes.App);
