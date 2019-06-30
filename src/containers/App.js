import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import WithClass from '../hoc/WithClass';

import './App.css';

class App extends Component {
  state = {
    persons: [
      {id:'fdsfsd', name:'Maciek', age:'28'},
      {id:'fffgb', name:'Sebek', age:'28'},
      {id:'r4r43', name:'Aza', age:'27'}
    ],
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  } 

  render () {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
        </div>
      );
    }
    return (
      <WithClass classes="App">
        <Cockpit 
          clicked={this.togglePersonHandler}
          persons = {this.state.persons}/>
        {persons}
      </WithClass>
    );
  }
  
}

export default App;
