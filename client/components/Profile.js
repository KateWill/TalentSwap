import React from 'react';

const Profile = ({username,zipcode,talent}) => (
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
            <a href="#"><i className="tiny material-icons">comment</i> Comment</a>
            <a href="#"><i className="tiny material-icons">thumb_up</i> Like</a>
        </div>

        </div>
      </div>
    </div>
   
  </div>
  
)

export default Profile;
