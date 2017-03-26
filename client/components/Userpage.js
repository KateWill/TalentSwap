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
    
    return(
     <div>
      <center><h1>{this.state.user.screenname}'s Profile</h1></center>
      <div className="row">
        <div className="col s4 push-s2">
          <img style={{width: "300px"}} className="activator" src="/images/mainimg1.jpg" />
        </div>
      
      <div className="col s4 push-s2">
        <p>
          Talent: {this.state.user.talent}<br/>
          Screen Name: {this.state.user.screenname} <br/>
          Zipcode: {this.state.user.zipcode} <br/>
        </p>
      </div>
      </div>
    <center><div style={{border:"1px solid", width: "50%", marginBottom: "25px"}}>
      <center><h2>Comment Section Will Go Here</h2></center>
      <div className="row">
        <div className="col s4 push-s4">
        <p>Comment: This is a comment</p>
        </div>
      </div>
    </div></center>
    </div>
    )
  }
}

export default connect()(Userpage);