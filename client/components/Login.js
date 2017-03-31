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
        <center><h1 className="light italic">Welcome Back!</h1></center>
          <div className="container" style={{width:"50%"}} >
            <h5 className="light italic">{this.props.route.title}</h5>
            <form onSubmit={this.handleSubmit}>
              <input autoFocus type="email" required={true} ref={ n => this.email = n } placeholder="email" />
              <input type="password" required={true} ref={n => this.password = n } placeholder="password" /> <br/>      
              <button className="btn yellow darken-2">{this.props.route.title}</button> 
            </form>
         </div>
      </div>
    )
  }
}

export default connect()(Login);
