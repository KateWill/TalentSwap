import React from 'react';
import { connect } from 'react-redux';
//import { refreshLogin } from '../actions/profiles';
import { setFlash } from '../actions/flash';
import Profile from './Profile'


class Profiles extends React.Component {
  state = { users: []}

  componentDidMount(){
    $.ajax({
      url: `/api/auth`,
      type: 'GET',
      // data: { email, password, username, zipcode , talent }
    }).done( users => {
      this.setState({users})
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.email.value;
    let password = this.password.value;
    let screenname = this.screenname.value;
    let zipcode = this.zipcode.value;
    let talent = this.talent.value;
    let dispatch = this.props.dispatch;
    let router = this.props.router;
 
    $.ajax({
      url: `/api/user`,
      type: 'GET',
      // data: { email, password, username, zipcode , talent }
    }).done( users => {
      console.log(users)
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }
   
  render(){
    let users = this.state.users.map( user => {
      return(
        <Profile 
          key={user._id}
          {...user}
        />
      )
    })
    return(
      <div>
        <div className="container">
          <center><h1>Search Profiles </h1></center>
          <div className="row">
            <div className="container">
            <center>
              <form onSubmit={this.handleSubmit}>
                <input type="Talent" ref={ n => this.talent = n } placeholder="Talent" /><br/><br/>
                <button className="btn yellow darken-2"name="uprofile">Search</button> 
              </form>
              <br/>
              <div>
                <p>THIS WILL BE THE MATCHED PROFILE </p>
              </div>
            </center>
            <div className="row">
              <h4>All: </h4>
              
                {users}
              
            </div>
            
            </div>  
          </div>
        </div>
      </div>
    )
  }
  
}

export default connect()(Profiles);