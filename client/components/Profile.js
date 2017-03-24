import React from 'react';

const Profile = ({username,zipcode,talent}) => (
  <ul>
      <li>Username: {username}</li> 
      <li>Zipcode: {zipcode}</li>
      <li>Talent: {talent}</li>
  </ul>
)

export default Profile;
