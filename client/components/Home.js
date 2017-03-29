import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  
  render(){
    var inlineStyle = {
      h1: {color:"white", left:"37%",top:"51%", position:'absolute',textShadow: "2px 2px #404040"},
      img: {position: 'relative'},
      h5: {color:"white",fontFamily:"san-serif", left:"41%",top:"61%", position:'absolute',textShadow: "2px 1px #404040",padding:"20px"}
    
  }
   var style2 = {
     h5: {color:"black"}
   }
   
    return (
      <div className="row">
       
        <img style={inlineStyle.img} className="col s12" src="images/mainimg2.png"/>
          <h1 style={inlineStyle.h1}>Talent Swap</h1>
          
           <h5 style={inlineStyle.h5}>Connect with others <br/> and get to swapping</h5>  
          
      </div>
    )
  }
}

export default connect()(Home);