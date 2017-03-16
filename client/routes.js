import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Auth from './components/Auth';
import NotFound from './components/NotFound';
import Profile from './components/Profile';

const AdminAccess = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => { return user.role === 'admin' },
  redirectAction: () => browserHistory.push("/"),
  wrapperDisplayName: 'UserIsAdmin'
})

const AdminRoutes = AdminAccess( (props) => props.children )

export default (
 <Route>
   <Route path="/" component={App}>
     <Route path="signup" component={Auth} title="Register" />
     <Route path="login" component={Auth} title="Login" />
     <Route component={AuthenticatedRoutes}>
         {/* PROTECTED BY AUTHENTICATION */}
       <Route component={AdminRoutes}>
      <Route path="profile" component={Auth} title="Profile" />
           {/* PROTECTED BY ADMIN ACCESS */}
       </Route>
     </Route>
     <Route path="*" status={404} component={NotFound}/>
   </Route>
 </Route>
)
