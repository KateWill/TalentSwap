import React from 'react';
import { connect } from 'react-redux';

class MyProfile extends React.Component {
  
  render(){

    return(
      <div>
        <center><h1>MY PROFILE</h1></center>
        <p>
          You are logged in as: {this.props.username}<br/>
          Your talent is: {this.props.talent}<br/>
          Your zipcode is: {this.props.zipcode}<br/>
        </p>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
 return { username: state.user.username, talent: state.user.talent, zipcode: state.user.zipcode}
}

export default connect(mapStateToProps)(MyProfile);