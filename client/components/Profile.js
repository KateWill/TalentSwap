import React from 'react';
import { connect } from 'react-redux';

const Profile = () => (
  <div className="container">
 
    <h2>This is an individual Profile</h2>
    <ul>
      <li>ScreenName:</li>
      <li>Talent:</li>
    </ul>
  
  </div>
)

export default connect() (Profile);
