import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Profiles from './components/Profiles';
import Login from './components/Login';

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
     <Route path="register" component={Register} title="Register" />
     <Route path="login" component={Login} title="Login" />
     <Route component={AuthenticatedRoutes}>
      <Route path="profile" component={Profile} />
      <Route path="profiles" component={Profiles} />
         {/* PROTECTED BY AUTHENTICATION */}
       <Route component={AdminRoutes}>
      
           {/* PROTECTED BY ADMIN ACCESS */}
       </Route>
     </Route>
     <Route path="*" status={404} component={NotFound}/>
   </Route>
 </Route>
)
