import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/register';

const AuthenticatedRoutes = ({ user, remember, children }) => (
  <div>
   { (user._id || remember) ? children : null }
  </div>
)

const mapStateToProps = (state) => {
  return { user: state.user, remember: state.remember }
}

export default connect(mapStateToProps)(AuthenticatedRoutes);
