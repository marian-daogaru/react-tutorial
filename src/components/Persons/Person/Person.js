import React, {Component} from 'react'
import PropTypes from 'prop-types'

import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('PersoN.js constructing')
  }

  componentWillMount() {
    console.log('PersoN.js componenet will mount')
  }

  componentDidMount() {
    console.log('PersoN.js componenet did mount')
  }

  render() {
    console.log('PersoN.js rendering')
    return (
      <Aux>
        <p onClick={this.props.click}>Im a {this.props.name} and Im {this.props.age} yo</p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, classes.Person)
