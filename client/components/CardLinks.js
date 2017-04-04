import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';



class CardLinks extends React.Component {
  state = { users: [] } 
  
render(){
 
  return(
    
  <div>
    <div className="card-action">
      <a onClick={this.props.addLike}><i className="tiny material-icons">thumb_up</i> Likes {this.props.likes}</a>
      <Link to={`/userpage/${this._id}`}><i className="tiny material-icons">visibility</i> View</Link>
    </div>
  </div>
)

  }
}
  
export default connect()(CardLinks);