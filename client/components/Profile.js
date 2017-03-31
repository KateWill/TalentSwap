import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

function addLike ({likes}){
  console.log('You added a like');
  console.log({likes})
   likes ++;
  console.log({likes});
}

const Profile = ({username, zipcode, talent, _id, screenname, likes}) => (
  <div>
    <div className="col s4">
      
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/profile2.png" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">Talent: {talent}<i className="material-icons right">more_vert</i></span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Talent: {talent}<i className="material-icons right">close</i></span>
        <p>
            Screen Name: {screenname}<br/>
            Zipcode: {zipcode}<br/>
        </p>
        <div className="card-action">
            <a onClick={addLike} href="#"><i className="tiny material-icons">thumb_up</i> Like 0 </a>
            <Link to={`/userpage/${_id}`}><i className="tiny material-icons">visibility</i> View</Link>
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
