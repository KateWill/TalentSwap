import React from 'react';
import { profile } from '../actions/profiles'; 

/*class Search extends React.Component {
  componentDidMount(){
    this.props.dispatch(getProfiles());
  }
}; */

class ContactList extends React.Component{
  constructor(){
    super();
    this.state = {
      serach: ''
    };
  }

  updateSearch(event){
     this.setState({search: event.target.value.substr(0,
       20)});
  }
  render(){
    let filteredContacts = this.props.contacts;
    return(
      <div>
        <ul>
          {this.props.contacts.map((contact)=> {
            return <Contact contact={contact}
                 key={contact.id}/>
          })}
          </ul>
          <input type = "text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

          </div>
    )
  }
}

