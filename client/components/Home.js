import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  
  render(){

    var inlineStyle = {
      h1: {color:"white", left:"38%",top:"40%",fontWeight:"300", position:'absolute',textShadow: "1px 1px #404040"},
      img: {position: 'relative',width:"100%"},
      h5: {color:"white",fontWeight:"200", left:"41%",top:"50%", position:'absolute',textShadow: "1px 1px #404040",padding:"20px"},
      p: {color:"black",margin:"20px",textAlign:"center",padding:"10px",fontFamily:"san-serif",fontSize:"20px"},
      btn: {position:"relative"}
  }
   var style2 = {
     h5: {color:"black"}
   }
   
    return (
      <div className="row">
       
        <img style={inlineStyle.img} src="images/mainimg2.png"/>
          <h1 style={inlineStyle.h1}>Talent Swap</h1>
          
           <h5 style={inlineStyle.h5}>Connect with others <br/> and get to <i style={{color:"#4db6ac"}}>swapping!</i>
           <br /><br/><a href="/register" className="btn">Get Started </a>   </h5>
           
      <div className="row" className="col s12">
        
          
          <center><i className="large material-icons pulse">loop</i></center> <hr />
       
        <p style={inlineStyle.p}>Why pay to learn a new skill?< br/>Did you know that you can leverage the skills you already have?<br />
        Let's say Sue plays piano, but has always wanted to learn how to sew.< br/>
        She can effortlessly exchange piano lessons for sewing lessons.< br />
        The best part is that our service is <u><b>completely free.</b></u></p>
       </div>
      </div>
    
    )
   
  }
}

export default connect()(Home);