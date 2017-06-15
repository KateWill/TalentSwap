import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/register';
import { setFlash } from '../actions/flash';

// this is the register component
class Register extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.email.value;
    let password = this.password.value;
    let bio = this.bio.value;
    let screenname = this.screenname.value;
    let zipcode = this.zipcode.value;
    let talent = this.talent.value;
    let dispatch = this.props.dispatch;
    let router = this.props.router;
 
    $.ajax({
      url: `/api/auth/register`,
      type: 'POST',
      data: { email,  password,  screenname, bio,  zipcode,  talent }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/login")
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }

  render() {
    return (
      <div className="reg grey lighten-5" style={{paddingBottom:"50px", paddingTop: "50px"}}> 
        <div className="container">
         <div className="row">
          <div className="col m5 pull-m1">
            <h3 className="light italic">Swap Talents With People In Your Area</h3>
            <ul style={{paddingTop:"15px"}}>

              <li style={{fontSize:"18px"}}><i className="medium material-icons">search</i> Explore New Talents</li><br/>
              <li style={{fontSize:"18px"}}><i className="medium material-icons ">mode_edit</i> Customize Your Interests & Experience</li><br/>
              <li style={{fontSize:"18px"}}><i className="medium material-icons">person_pin</i> Connect With People In Your Area</li>    

            </ul>
          </div>
        
          <div className="col m6 offset-m1">
            <h2 className="center light italic">{this.props.route.title}</h2>
            <form onSubmit={this.handleSubmit}>
              <input type="email" required={true} ref={ n => this.email = n } placeholder="Your Email" autoFocus />
              <input type="password" required={true} ref={n => this.password = n } placeholder="Set Password" />
                  <center><h4 className="light italic">Enter your profile information here</h4></center>
                    <input type="text" required={true} ref={ n => this.screenname = n}  placeholder="Choose a Screenname" />
                    <input type="text" required={true} ref={ n => this.zipcode = n }  placeholder="Your Zip Code" />
                    <input type="text" required={true} ref={ n => this.talent = n } placeholder="Your Talent for Trade" />
                    <textarea style={{height:"200px", width: "500px"}} required={true} ref={ n => this.bio = n } placeholder="Describe your talent background" />  <br/>  
            <button style={{marginTop:"15px"}} className="btn yellow darken-2">{this.props.route.title}</button> 
          </form>
         </div> 
        </div>
      </div>
    </div>
    )
  }
}

export default connect()(Register);
