import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props)
    console.log('PersonS.js constructing')
  }

  componentWillMount() {
    console.log('PersonS.js componenet will mount')
  }

  componentDidMount() {
    console.log('PersonS.js componenet did mount')
  }

  render() {
    console.log('PersonS.js rendering')
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
      />
    })
  }
}

export default Persons
