import React from 'react';
import { connect } from 'react-redux';
//import { refreshLogin } from '../actions/profiles';
import { setFlash } from '../actions/flash';
import Profile from './Profile'

class Profiles extends React.Component {
    constructor(props) {
    super(props);
    this.state = { users: [], searchedUsers: null, talent: '', username: '', bio: '', screenname: '', zipcode: '', searched: ''}
    }

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

  handleChange = (event) => {
    let word = event.target.value
    let users = this.state.users

    if (word === '') {
      this.setState({ searchedUsers: users, searched: word })
    } else {
    
      let regex = new RegExp(word.toLowerCase()) 
      
      let searchedUsers = users.filter( (user) => {
        if (regex.test(user.talent.toLowerCase())) {
          return user;
        }
      })

      this.setState({ searchedUsers, searched: word })
    }
  
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
   
    let talent = this.talent.value.toLowerCase();
    
    $.ajax({
      url: `/api/auth/${talent}`,
      type: 'GET',
    }).done( users => {
      this.setState({users})
      let { username, zipcode, talent, bio, screenname, likes, comment } = this.state.users[0]
      this.setState({ username, zipcode , talent, bio, screenname, likes, comment})
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }
  // handleAddLike(likes){
  //   console.log("Likes passed in from Profiles:", likes);
  //   let addedLike = likes;
  //   let currentLikes = this.state.likes;
  //   console.log("current state of likes:", currentLikes)
  //   likes = (addedLike + currentLikes);
  //   console.log("New State of Likes:", likes);
  //   this.setState({likes: likes});
    
  //   // $.ajax({
  //   //   url: `/api/auth/${likes}`,
  //   //   type: 'GET',
  //   // }).done( users => {
  //   //   this.setState({users})
  //   //   let likes = this.state.user.likes
  //   //   this.setState({likes})
  //   // }).fail( err => {
  //   //   dispatch(setFlash(err.responseJSON.message, 'error'))
  //   // });
  // } 

  render(){
    let { searchedUsers, users: initialUsers } = this.state;
    let filteredUsers = searchedUsers || initialUsers;
    let users = filteredUsers.map( user => {
      console.log(user)
      return(
        <Profile 
          key={user._id}
          // user={this.state.user}
          //addLike = {this.handleAddLike.bind(this)}
          {...user}
        />
      )
    })
    return(
      <div>
        <div className="container">
          
          <center><h1 className="light italic">Search Profiles </h1></center>
          <div className="row">
            <center>
              <form onSubmit={this.handleSubmit}>
                <i className="small material-icons">search</i>
                <input  autoFocus style={{width:"350px", fontSize:"20px", height: "35px"}} type="Talent"  value={this.state.searched} onChange={this.handleChange} ref={ n => this.talent = n } placeholder=" Talent " /><br/><br/>
                <button type="submit" style={{fontSize:"20px", height: "50px", marginRight: "20px"}} className="btn yellow darken-2"name="uprofile">Search</button>
              </form>
            </center><br/>
              
            <div>
              <h4 className="light italic">All Profiles: </h4>
                {users}     
            </div>  
          </div>
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
 return { username: state.user.username, screenname: state.user.screenname, bio: state.user.bio, talent: state.user.talent, zipcode: state.user.zipcode }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({searchUser: searchTalent},dispatch)
}


export default connect()(Profiles);