import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class About extends React.Component{

render(){
    var inlineStyle = {
      h1: {color:"#4db6ac",top:"12%",textAlign:"center",fontWeight:"300", position:'relative',textShadow: "1px 1px #404040"},
      img: {borderRadius:"10%",position: 'relative',width:"35%",height:"35%",marginTop:"30px"},
      h5: {color:"white",fontWeight:"200", left:"41%",top:"50%", position:'absolute',textShadow: "1px 1px #404040",padding:"20px"},
      p: {color:"black",margin:"50px",textAlign:"center",padding:"10px",fontSize:"20px"},
      btn: {position:"relative"}
  }
    return(
<div className="row"className="col s12">
          <h1 style={inlineStyle.h1}>Meet the Team</h1>
       <center> <img style={inlineStyle.img} src="images/aboutimg.png"/> </center>
         
          
           <h5 style={inlineStyle.h5}>
           <br /><br/>  </h5>
           
      <div className="row" className="col s12">
        
          
          <center><i className="large material-icons pulse"></i></center> 
       <br /> <center><h5><b>Meet Zach, Kate, and Heidi the founders of Talent Swap.</b></h5> </center>
        <p style={inlineStyle.p}>
        Talent Swap connects people with various backgrounds and skills, 
        allowing them to find the talents they are in need of and arrange a swap! </br>
        Registered users can search the Talent Swap database for other users in their area that are offering a skill they need. 
        For example, a dentist may want to make a trade with someone who can teach his son guitar lessons. 
        Or a web designer might make a website for a local painter in exchange for painting his baby’s nursery. 
        The possibilities are endless!<br/><a href="register">Click here to register</a> </p>
       </div>
      </div>
    )
}
}
export default connect()(About); 