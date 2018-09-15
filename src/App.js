import React, { Component } from 'react';
import User from './User';
import './App.css';

class App extends Component {
  // define State
state = {
  user: {}
}

// getUser is an ES6 function that binds 'this' without the need to bind within the constructor
getUser = () =>  {
  const name = this.refs.name.value;
  // use fetch browser API instead of the HTTPRequest object
  // fetch uses a template string - this is why I am using the backticks
  // fetching the users github repo infor using the name variable as aprt of an API call
  fetch(`http://api.github.com/users/${name}`).then(response => response.json()).then(data => {this.setState({
    user: {
      name: data.name,
      location: data.location
    }
  })
})
}

  render() {
    const { user } = this.state; 
    // below User tag brings in content from user.js
    return (
      <div className="App">
        <input type="text" placeholder="Enter a username" ref="name"/>
        <button onClick={this.getUser}>Get User Details</button>
        <User user={user}/>
      </div>
    );
  }
}

export default App;
