import React from 'react';
import { connect } from 'react-redux';


class Userpage extends React.Component {
  
 
  render(){

    return(
     <h1> Hello al;sdfkjas;dlj </h1>


    )
  }
}
const mapStateToProps = (state) => {
 return ("Hello")
}

export default connect(mapStateToProps)(Userpage);