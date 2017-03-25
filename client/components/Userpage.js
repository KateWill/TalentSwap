import React from 'react';
import { connect } from 'react-redux';

class Userpage extends React.Component {
  
  $.ajax({
      url: `/api/auth/${talent}`,
      type: 'GET',
      // data: { email, password, username, zipcode , talent }
    }).done( users => {
      this.setState({users})
      let { username, zipcode, talent } = this.state.users[0]
      this.setState({ username, zipcode , talent})
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });

  render(){

    return(
     <h1> Hello al;sdfkjas;dlj </h1>


    )
  }
}
const mapStateToProps = (state) => {
 return ()
}

export default connect(mapStateToProps)(Userpage);