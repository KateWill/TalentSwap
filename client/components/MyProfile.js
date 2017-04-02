import React from 'react';
import { connect } from 'react-redux';

class MyProfile extends React.Component {
  
  render(){

    return(
      <div className="row">
          <div className="col s4 push-s3">
            <h3> My Profile </h3>
            
              <img style={{width: "200px"}} src="images/blank.png" />
            
            <div>
              <p><b>Screen Name:</b> {this.props.screenname} <br/>
              <b>Talent:</b> {this.props.talent}<br/>
              <b>Zip Code:</b> {this.props.zipcode}<br/>
              <b>Talent Background:</b> {this.props.bio}
              </p>
                  <a href="#" className="amber-text text-darken-1"><i className="tiny material-icons amber-text text-darken-1">comment</i> My Comments</a><br/>
                  <a href="#" className="amber-text text-darken-1"><i className="tiny material-icons amber-text text-darken-1">thumb_up</i> Like {this.props.likes} </a><br/>
                <button className="btn yellow darken-2">Edit My Profile</button>
            </div>
          </div>
          
        <div className="col s4 push-s2">
          <center><h3>Live View</h3>
          <p><i>This is how others see your profile</i></p></center>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="images/blank.png" />
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
                <a href="#"><i className="tiny material-icons">comment</i> My Comments</a>
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