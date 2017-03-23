import React from 'react';
import { connect } from 'react-redux';




class Profiles extends React.Component {
  
 
  render(){

    return(
      <div>
        <h1>Search Profiles </h1>
         <div className="row">
          <img className="col s12" src="images/mainimg1.jpg" />
        </div>
      </div>
    )
  }
}

export default connect()(Profiles);