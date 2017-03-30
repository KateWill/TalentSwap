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

  logComments= (e) =>{
    e.preventDefault();
    let {refs: {comment}, form } = this;
    console.log (`${comment.value}`);
    this.comment = `${comment.value}`;
    console.log(this.comment);
    //comment.reset();
  }
  render(){
    
    return(
     <div>
      <center><h1>{this.state.user.screenname}'s Profile</h1></center>
      <div className="row">
        <div className="col s4 push-s2">
          <img style={{width: "300px"}} className="activator" src="/images/mainimg1.jpg" />
        </div>
      
      <div className="col s4 push-s2">
        <p>
          Talent: {this.state.user.talent}<br/>
          Screen Name: {this.state.user.screenname} <br/>
          Zipcode: {this.state.user.zipcode} <br/>
          Talent Background: {this.state.user.bio} <br/>
        </p>
      </div>
      </div>
    
      <div className="row">
        <div className="col s4 push-s2">
        <form onSubmit={this.logComments}>
          <h3>Leave a comment</h3>
          <textarea style={{height:"100px", width: "300px"}} required={true} ref="comment" placeholder="Comment" />  <br/> 
          <button style={{marginTop:"15px"}} className="btn yellow darken-2">Comment</button>
        </form>
        </div>
        <div className="col s4 push-s2">
          <h3>View Comments</h3>
          <div>
            <ul>
              <Comments />
            </ul>
          </div>
        </div>
      </div>
   
    </div>
    )
  }
}

export default connect()(Userpage);