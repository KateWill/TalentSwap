import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import CardLinks from './CardLinks';


class Profile extends React.Component {
    constructor(props) {
    super(props);
    this.state = { users: [], searchedUsers: null, talent: '', username: '', bio: '', screenname: '', zipcode: '', searched: '', likes: 0 }
    }
  
  addLike = () => {
//      $.ajax({
//      url: `/api/auth/${likes}`,
//      type: 'GET',
//  }).done( users => {
//     this.setState({users})
//     let likes = this.state.user.likes
//     this.setState({likes})
//   }).fail( err => {
//      dispatch(setFlash(err.responseJSON.message, 'error'))
//    });

    this.setState({likes: ++this.state.likes})
  }
  
render() {
  return(
    
  <div className="col s4">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/blank.png" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">Talent: {this.props.talent}<i className="material-icons right">more_vert</i></span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Talent: {this.props.talent}<i className="material-icons right">close</i></span>
        <p>
          Screen Name: {this.props.screenname}<br/>
          Zipcode: {this.props.zipcode}<br/>
        </p>
        
         <CardLinks
          key={this.props.id}
          id={this.props.id}
          addLike = {this.addLike}
          likes = {this.state.likes}
         />
      </div>
    </div>
  </div>
)

  }
}
  
export default connect()(Profile);
