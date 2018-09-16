import React, { Component } from 'react';
import User from './User';
import MostForked from './MostForked';
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

// mostForked NOT RETURNING CORRECTLY - something to do with the collection being an array?

getMostForked = () => {
    fetch(`https://api.github.com/search/repositories?q=forks%3A%3E0&sort=forks&per_page=100`).then(response => response.json()).then(data => {this.setState({
      mostForked: {
        name: data.name,
        ownerName: data.full_name,
        htmlUrl: data.html_url
      }
    })
  })
}

  render() {
    const { user } = this.state; 
    const { mostForked } = this.state;
    // below User tag brings in content from user.js

    //  below MostForked tag brings in most forked repositories
    return (
      <div className="App">
        <input type="text" placeholder="Enter a username" ref="name"/>
        <button onClick={this.getUser}>Get User Details</button>
        <User user={user}/>
        
        <div>
          <button onClick={this.getMostForked}>Get 'Most Forked' repositories</button>
          <MostForked mostForked={mostForked}/>
        </div>
      </div>
    );
  }
}

export default App;
