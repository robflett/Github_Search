import React, { Component } from 'react';

class Repos extends Component {

      constructor(props) {
          super(props)
  this.state = {
              repos:'',
              reposlist: [],
              showresult:false,
          }
      }


  render() {
    return (
       <div>
         {this.state.showresult ? this.state.reposlist.items.map((reposdata,i) => <div key={i}>
           <img src={reposdata.owner.avatar_url}/>
           <a href={reposdata.svn_url} target="_blank">{reposdata.name}</a>
           <p>Username:<a href={reposdata.owner.html_url} target="_blank"> {reposdata.owner.login}</a></p>
           </div>
       ) : ""}
       </div>
    )
  }
}

export default Repos;