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
      url: `/api/register/${location.pathname}`,
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
      <div>
        <h2 className="center">{this.props.route.title}</h2>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <input type="email" required={true} ref={ n => this.email = n } placeholder="email" />
              <input type="password" required={true} ref={n => this.password = n } placeholder="password" />
                
                 
                 
            <button className="btn yellow darken-2">{this.props.route.title}</button> 
          </form>
          <br />
         </div>
          <div className="row">
          <img className="col s12" src="images/mainimg1.jpg" />
        </div>
      </div>
    )
  }
}

export default connect()(Login);
