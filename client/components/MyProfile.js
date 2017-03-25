import React from 'react';
import { connect } from 'react-redux';

class MyProfile extends React.Component {
  
  render(){

    return(
      <div className="row">
        <center><h1>MY PROFILE</h1></center>
    <div className="col s4 push-s4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="images/mainimg1.jpg" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Talent: {this.props.talent}<i className="material-icons right">more_vert</i></span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Talent: {this.props.talent}<i className="material-icons right">close</i></span>
            <p>
                Username: {this.props.username}<br/>
                Zipcode: {this.props.zipcode}<br/>
            </p>
            <div className="card-action">
                <a href="#"><i className="tiny material-icons">comment</i> Comment</a>
                <a href="#"><i className="tiny material-icons">thumb_up</i> Like</a>
            </div>

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

export default connect(mapStateToProps)(MyProfile);