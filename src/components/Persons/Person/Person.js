import React, {Component} from 'react'
import classes from './Person.css'


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
      <div
        className={classes.Person}
      >
        <p onClick={this.props.click}>Im a {this.props.name} and Im {this.props.age} yo</p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    )
  }
}

export default Person
