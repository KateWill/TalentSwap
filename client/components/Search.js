import React from 'react';
import { connect } from '../'
import { profile } from '../actions/profiles'; 

class Search extends React.Component {
  componentDidMount(){
    this.props.dispatch(getProfiles());
  }
};