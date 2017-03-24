import React from 'react';

const Profile = ({username,zipcode,talent}) => (
  <div>
    <div className="col s4">
      Username: {username}<br/>
      Zipcode: {zipcode}<br/>
      Talent: {talent}<br/><br/>
      </div>
    </div>
  
)

export default Profile;
