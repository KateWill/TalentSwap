import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class Comments extends React.Component {
  
  render(){

    return(

      <div>
        <li>Posted By: {this.props.screenname}<br/>
        Comment:{this.props.comments}</li>
      </div>
  
    )
  }
}

const mapStateToProps = (state) => {
 return { username: state.user.username, screenname: state.user.screenname, bio: state.user.bio, talent: state.user.talent, zipcode: state.user.zipcode, comments: state.user.comments}
}
export default connect(mapStateToProps)(Comments);
