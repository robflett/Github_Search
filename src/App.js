import React, { Component } from 'react';
import User from './User';
import Repos from './Repos';
import './App.css';

class App extends Component {
  // define State
state = {
  user: {},
  repos: Array(30).fill(null)
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
      login: data.login,
      location: data.location,
      avatar: data.avatar_url,
      email: data.email,
      url: data.html_url
    }
  })
})
}

getRepos = () => {
    const topic  = this.refs.topic.value;
    fetch(`https://api.github.com/search/repositories?q=topic:${topic}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
              repos: data,
              showresult:true
            })
        })
}


  render() {
    const { user } = this.state; 
    const { repos } = this.state;
    // below User tag brings in content from user.js
    return (
      <div className="container">
        <div className="search">
          <input type="text" placeholder="Enter a username" ref="name"/>
          <button onClick={this.getUser}>Get User Details</button>
        </div>
        <div className="search">
          <input ref="topic" placeholder="Search for a topic..."/>
          <button onClick={this.getRepos}>Get Topic Details</button>
        </div>
        <User user={user}/>
        <Repos repos={repos}/>
      </div>
    );
  }
}


export default App;
