import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class Comment extends React.Component {
  
  render(){

    return(
        <li style={{width: "30%"}} className="left-align">{this.props.comment}</li>
    )
  }
}

// const mapStateToProps = (state) => {
//  return { username: state.user.username, screenname: state.user.screenname, bio: state.user.bio, talent: state.user.talent, zipcode: state.user.zipcode, comments: state.user.comments}
// }
export default connect()(Comment);
