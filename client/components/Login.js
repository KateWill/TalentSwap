import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/register';
import { setFlash } from '../actions/flash';

// this is the login component
class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, props: { location, dispatch, router }} = this;

    $.ajax({
      url: `/api/auth/login`,
      type: 'POST',
      data: { email: email.value, password: password.value }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/Profiles")
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }

  render() {
    return (
      <div style={{paddingBottom:"100px"}}>
        <center><h1>Welcome Back!</h1></center>
        <h3 className="center">{this.props.route.title}</h3>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <input type="email" required={true} ref={ n => this.email = n } placeholder="email" />
              <input type="password" required={true} ref={n => this.password = n } placeholder="password" /> <br/>      
              <button className="btn yellow darken-2">{this.props.route.title}</button> 
            </form>
         </div>
      </div>
    )
  }
}

export default connect()(Login);
