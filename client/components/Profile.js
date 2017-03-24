import React from 'react';

const Profile = ({username,zipcode,talent}) => (
  <div>
    <div className="col s4">
      <div className="card indigo lighten-4">
        <div className="card-content">
          <span className="card-title">Talent: {talent}</span>
          <p>
            Username: {username}<br/>
            Zipcode: {zipcode}<br/>
          </p>
        </div>
        <center>
        <div className="card-action indigo lighten-2">
          <a href="#"><i className="tiny material-icons">stars</i> Save</a>
          <a href="#"><i className="tiny material-icons">thumb_up</i> Like</a>
          <a href="#"><i className="tiny material-icons">thumb_down</i> Hide</a>
        </div>
        </center>
      </div>
      <br/><br/>
      </div>
    </div>
  
)

export default Profile;
