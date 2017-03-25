import React from 'react';
import { connect } from 'react-redux';


class Userpage extends React.Component {
  state = { user: [] }
  componentDidMount(){
    $.ajax({
      url: `/api/auth/getuser/${this.props.params.id}`,
      type: 'GET',
      // data: { email, password, username, zipcode , talent }
    }).done( user => {
      this.setState({user})
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }
 
  render(){
    console.log(this.state.user)
    return(
      
     <div>
     <h1> Hello al;sdfkjas;dlj </h1>
     <p>User Id: {this.state.user._id}</p>
   

     </div>
    )
  }
}


// const mapStateToProps = (state) => {
//  return {user: state.user}
// }

export default connect()(Userpage);