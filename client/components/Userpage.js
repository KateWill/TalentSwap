import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comment';


class Userpage extends React.Component {
  state = { user: [], comment: '' }
  componentDidMount(){
    $.ajax({
      url: `/api/auth/getuser/${this.props.params.id}`,
      type: 'GET',
      //data: { email,  password,  screenname, bio,  zipcode,  talent }
    }).done( user => {
      this.setState({user})
      //this.setState({user: []})
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }

  logComments = (e) =>{
    e.preventDefault();
    let {refs: {comment}, form } = this;
    console.log (`${comment.value}`);
    this.comment = `${comment.value}`;
    console.log(this.comment);
    //comment.reset();
    //  $.ajax({
    //   url: `/api/auth/comment`,
    //   type: 'POST',
    //   data: { email, screenname, bio,  zipcode,  talent, comment }
    // }).done( user => {
    //   dispatch(refreshLogin(user));
    //   //router.push("/profiles")
    // }).fail( err => {
    //   dispatch(setFlash(err.responseJSON.message, 'error'))
    // });
  }
  render(){
  
    return(
     <div>
      <div className="row">
      <center><h2 className="light italic">Profile for:</h2>
        <h3 className="light italic">{this.state.user.screenname}</h3></center>
        <div className="col s8 push-s2">
        
          <center><img style={{width: "300px"}} className="activator" src="/images/blank.png" /></center>
         
        <center> 
        <p className="left-align light italic" style={{width: "30%"}}>
          <b>Talent:</b> {this.state.user.talent}<br/>
          <b>Screen Name:</b> {this.state.user.screenname} <br/>
          <b>Zipcode:</b> {this.state.user.zipcode} <br/>
          <b>Talent Background:</b> {this.state.user.bio} <br/>
        </p>
        <button style={{marginTop:"15px"}} className="btn yellow darken-2">Message Me</button>
        
        </center>
      </div>
    </div>
      

      <div className="row">
        <div className="col s8 push-s2">
        <center>
         <h3 className="light italic">View Comments</h3>
          <ul>
              <Comments />
          </ul>
        <form onSubmit={this.logComments}>
          <h3 className="light italic">Leave a comment</h3>
          <textarea style={{height:"100px", width: "300px"}} required={true} ref="comment" placeholder="Comment" />  <br/> 
          <button style={{marginTop:"15px"}} className="btn yellow darken-2">Comment</button>
        </form>
        </center>
          </div> 
       </div>
    </div>
    )
  }
}

export default connect()(Userpage);