import React, { Component } from 'react';

class MostForked extends Component {

  render() {
    const { mostForked } = this.props
    return (
        <div>
          <h4>Most Forked Details</h4>
          <h4>{mostForked}</h4>
          <h4>{mostForked}</h4>
          <h4>{mostForked}</h4>
        </div>
      )
  }
}

export default MostForked;