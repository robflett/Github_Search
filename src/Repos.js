import React, { Component } from 'react';

class Repos extends Component {

  state = {
              showresult:false
          }

  render() {
    const { repos } = this.props
    return (
     <div className="container">
     {this.state.showresult ? repos.items.map((reposmap, i) => 
        <div key={i}>
          <img src={reposmap.owner.avatar_url}/>
          <a href={reposmap.svn_url} target="_blank">{reposmap.name}</a>
          <p>Username:<a href={reposmap.owner.html_url} target="_blank"> {reposmap.owner.login}</a></p>
        </div>
    ): "Lasagne"}
     </div>
     );
  }
}

export default Repos;