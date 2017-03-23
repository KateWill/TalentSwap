import React from 'react';
import { connect } from 'react-redux';

class MyProfile extends React.Component {
  
  render(){

    return(
      <div>
        <center><h1>MY PROFILE</h1></center>
      
        </div>
    )
  }
}

export default connect()(MyProfile);