import React, { Component } from 'react';

class User extends Component {

  render() {
    const { user } = this.props
    return (
      <div className="card">
        <div>
            <div >
              <img className="avatar" src={user.avatar} />
            </div>
        </div>
        <div className="details">
          <h3 className="title">{user.name}</h3>
          <h3>
            <a href={user.url} target="_blank">{user.login}</a>
          </h3>
          <em>{user.location}</em>
          <div>
            <a href={"mailto:" + user.email} target="_blank">{user.email}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default User;