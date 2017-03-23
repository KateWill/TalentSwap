import React from 'react';
import { connect } from 'react-redux';
//import { refreshLogin } from '../actions/profiles';
import { setFlash } from '../actions/flash';


class Profiles extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.email.value;
    let password = this.password.value;
    let username = this.username.value;
    let zipcode = this.zipcode.value;
    let talent = this.talent.value;
    let dispatch = this.props.dispatch;
    let router = this.props.router;
 
    $.ajax({
      url: `/api/auth/profiles`,
      type: 'POST',
      data: { email, password, username, zipcode , talent }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/profile")
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }
 
  render(){
    return(
      <div>
        <div className="container">
          <p>You are logged in as: {this.props.username}</p>
          <center><h1>Search Profiles </h1></center>
          <div className="row">
            <div className="container">
            <center>
              <form onSubmit={this.handleSubmit}>
                <input type="Talent" ref={ n => this.talent = n } placeholder="Talent" /><br/><br/>
                <button className="btn yellow darken-2">Search</button> 
              </form>
            </center>
            </div>  
          </div>
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
 return { username: state.user.username } 
}

export default connect(mapStateToProps)(Profiles);