import React from 'react';

const Profile = () => (
  <div className="container">
  <form>
  <label>
    <h2>Enter your profile information here</h2>
    <input type="text" name="name" />
      <input type="text" name="location" />
        <input type="text" name="skills" />
  </label>
  <input type="submit" value="Submit" />
</form>
  </div>
)

export default Profile;
