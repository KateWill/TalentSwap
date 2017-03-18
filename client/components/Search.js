import React from 'react';
import { connect } from '../'


class Search extends React.Component {
  componentDidMount(){
    this.props.dispatch(getProfiles());
  }
};