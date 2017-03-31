import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Profiles from './components/Profiles';
import MyProfile from './components/MyProfile';
import Login from './components/Login';
import Home from './components/Home';
import Userpage from './components/Userpage';
import About from './components/About';
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
     <IndexRoute component={Home} />
     <Route path="register" component={Register} title="Register" />
     <Route path="login" component={Login} title="Login" />
     <Route path="about" component={About} title="About" />
     <Route component={AuthenticatedRoutes}>
      <Route path="myprofile" component={MyProfile} />
      <Route path="profiles" component={Profiles} />
      <Route path="profile" component={Profile} />
      <Route path="userpage/:id" component={Userpage} />
         {/* PROTECTED BY AUTHENTICATION */}
       <Route component={AdminRoutes}>
      
           {/* PROTECTED BY ADMIN ACCESS */}
       </Route>
     </Route>
     <Route path="*" status={404} component={NotFound}/>
   </Route>
 </Route>
)
