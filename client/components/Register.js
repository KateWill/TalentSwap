import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/register';
import { setFlash } from '../actions/flash';

// this is the login component
class Register extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.email.value;
    let password = this.password.value;
    let username = this.username.value;
    let zipcode = this.zipcode.value;
    let talent = this.talent.value;
    let dispatch = this.props.dispatch;
    let router = this.props.router;
  console.log(username,email,password,zipcode,talent);
    $.ajax({
      url: `/api/auth/register`,
      type: 'POST',
      data: { email ,  password ,  username ,  zipcode ,  talent }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/profiles")
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
                    <input type="text" required={true} ref={ n => this.username = n}  placeholder="username" />
                    <input type="text" required={true} ref={ n => this.zipcode = n}  placeholder="zipcode" />
                    <input type="text" required={true} ref={ n => this.talent = n} placeholder="talent" />
                 
                 
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

export default connect()(Register);
