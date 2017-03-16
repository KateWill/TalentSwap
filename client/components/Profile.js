import React from 'react';
import { connect } from 'react-redux';

const Profile = () => (
  <div className="container">
  <form>
  <label>
    <h2>Enter your profile information here</h2>
    <input type="text" required={true} ref={ n => this.name = n}  placeholder="name" />
      <input type="text" required={true} ref={ n => this.name = n}  placeholder="location" />
        <input type="text" required={true} ref={ n => this.name = n} placeholder="skills" />
  </label>
  <button className="btn yellow darken-2" type="submit" value="Submit">Create</button>
</form>
  </div>
)

export default connect() (Profile);
