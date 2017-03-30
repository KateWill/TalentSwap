import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  
  render(){

    return(
      <div>
        <center><h1>Welcome To Talent Swap!</h1></center>
         <div className="row">
          <img className="col s12" src="images/mainimg1.jpg" />
         </div>
        </div>
    )
  }
}

export default connect()(Home);