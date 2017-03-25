import React from 'react';
import { connect } from 'react-redux';
//import { refreshLogin } from '../actions/profiles';
import { setFlash } from '../actions/flash';
import Profile from './Profile'
import {searchUser} from '../actions/search';


class Profiles extends React.Component {
  state = { users: [], talent: '', username: '', zipcode:'' }

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
    // let email = this.email.value;
    // let password = this.password.value;
    // let screenname = this.screenname.value;
    // let zipcode = this.zipcode.value;
    let talent = this.talent.value;
    // let dispatch = this.props.dispatch;
    // let router = this.props.router;
 
    $.ajax({
      url: `/api/auth/${talent}`,
      type: 'GET',
      // data: { email, password, username, zipcode , talent }
    }).done( users => {
      this.setState({users})
      let { username, zipcode, talent } = this.state.users[0]
      this.setState({ username, zipcode , talent})
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
          
          <center><h1>Search Profiles </h1>
          <p><i> Or If you're feeling adventurous click "Explore" for a randomized profile</i></p></center>
          <div className="row">
            <center>
              <form onSubmit={this.handleSubmit}>
                <i className="small material-icons">search</i>
                <input style={{width:"350px", fontSize:"20px", height: "35px"}} type="Talent" ref={ n => this.talent = n } placeholder=" Talent " /><br/><br/>
                <button type="submit" style={{fontSize:"20px", height: "50px", marginRight: "20px"}} className="btn yellow darken-2"name="uprofile">Search</button>
                <button type="button" style={{fontSize:"20px", height: "50px"}} className="btn yellow darken-2"name="uprofile">Explore</button>
              </form>
              
            </center>

              <br/>
              <div>
                <h3>Featured Search Result...</h3>
                <p>This is will be the top result? And the other matches will be underneath?</p>
                <div className="card indigo lighten-4">
                  <div className="card-content">
                    <span className="card-title">Talent: {this.state.talent}</span>
                    <p>
                      Username: {this.state.username} <br/>
                      Zipcode: {this.state.zipcode}<br/><br/>

                      <button className="btn yellow darken-2"name="uprofile">Contact</button>

                    </p>
                  </div>
              
                <center> <div className="card-action indigo lighten-2">
                <a href="#"><i className="tiny material-icons">stars</i> Save</a>
                <a href="#"><i className="tiny material-icons">thumb_up</i> Like</a>
                <a href="#"><i className="tiny material-icons">thumb_down</i> Hide</a>
                </div></center>
            </div>
          </div>
            
            <div>
              <h4>All Profiles: </h4>
                {users}     
            </div>  
          </div>
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
 return { username: state.user.username, talent: state.user.talent, zipcode: state.user.zipcode}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({searchUser: searchTalent},dispatch)
}


export default connect()(Profiles);