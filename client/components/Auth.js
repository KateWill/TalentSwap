import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';
// this is the login component
class Auth extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, props: { location, dispatch, router }} = this;

    $.ajax({
      url: `/api/auth/${location.pathname}`,
      type: 'POST',
      data: { email: email.value, password: password.value }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/")
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
                  <center><h4>Enter your profile information here</h4></center>
                    <input type="text" required={true} ref={ n => this.name = n}  placeholder="username" />
                      <input type="text" required={true} ref={ n => this.name = n}  placeholder="zip code" />
                        <input type="text" required={true} ref={ n => this.name = n} placeholder="skills" />
                 
                 
            <button className="btn yellow darken-2">{this.props.route.title}</button> 
          </form>
          <br />
         </div>
      </div>
    )
  }
}

export default connect()(Auth);
