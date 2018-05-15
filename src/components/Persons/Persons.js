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

  componentWillReceiveProps(nextProps) {
    console.log('PersonS.js update inside componenetwillreceiveprops')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('PersonS.js update inside should component update', nextProps, nextState)
    return nextProps.persons !== this.props.persons
  }

  componentWillUpdate(nextPros, nextState) {
    console.log('PersonS.js inside componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('PersonS.js inside componentDidUpdate')
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
