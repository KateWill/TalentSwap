import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

const Profile = ({username, zipcode, talent, userId}) => (
  <div>
    <div className="col s4">
      
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/mainimg1.jpg" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">Talent: {talent}<i className="material-icons right">more_vert</i></span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Talent: {talent}<i className="material-icons right">close</i></span>
        <p>
            Username: {username}<br/>
            Zipcode: {zipcode}<br/>
        </p>
        <div className="card-action">
            <a href="#"><i className="tiny material-icons">thumb_up</i> Like</a>
            <Link to={`/userpage/${userId}`}><i className="tiny material-icons">visibility</i> View</Link>
        </div>

        </div>
      </div>
    </div>
   
  </div>
  
)

const mapStateToProps = (state) => {
  return { userId: state.user._id }
}

export default connect(mapStateToProps)(Profile);
