import React from 'react';
import { connect } from 'react-redux';

class MyProfile extends React.Component {
  
  render(){

    return(
      <div className="row">
        <center><h1>MY PROFILE</h1></center>
          <div className="col s4 push-s1">
            <h3> My Profile </h3>
            <div>
              <img style={{width: "300px"}} src="images/mainimg1.jpg" />
            </div>
            <div>
              <p>Screen Name: {this.props.screenname} <br/></p>
              <p>Talent: {this.props.talent}</p>
              <p>Talent: {this.props.talent}</p>
              <p>
                  Screen Name: {this.props.screenname}<br/>
                  Zip Code: {this.props.zipcode}<br/>
                  Talent Background: {this.props.bio}
              </p>
                  <a href="#"><i className="tiny material-icons">comment</i> My Comments</a><br/>
                  <a href="#"><i className="tiny material-icons">thumb_up</i> Like {this.props.likes} </a>
            </div>
          </div>
          
        <div className="col s4 push-s2">
          <h3>Live View</h3>
          <p>This is how others see your profile</p>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="images/mainimg1.jpg" />
          </div>
          <div className="card-content">
            <p>Screen Name: {this.props.screenname} <br/></p>
            <span className="card-title activator grey-text text-darken-4">
            Talent: {this.props.talent}<i className="material-icons right">more_vert</i></span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Talent: {this.props.talent}<i className="material-icons right">close</i></span>
            <p>
                Screen Name: {this.props.screenname}<br/>
                Zip Code: {this.props.zipcode}<br/>
                Talent Background: {this.props.bio}
            </p>
            <div className="card-action">
                <a href="#"><i className="tiny material-icons">comment</i> My Comment</a>
                <a href="#"><i className="tiny material-icons">thumb_up</i> Like {this.props.likes} </a>
            </div>

            </div>
          </div>
        </div>
</div>


    )
  }
}
const mapStateToProps = (state) => {
 return { username: state.user.username, screenname: state.user.screenname, bio: state.user.bio, talent: state.user.talent, zipcode: state.user.zipcode, comments: state.user.comments, likes: state.user.likes}
}

export default connect(mapStateToProps)(MyProfile);