import React from 'react';
import { Link } from 'react-router';
import { logout, refreshLogin } from '../actions/register';
import { connect } from 'react-redux';
import Flash from '../components/Flash';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav({ closeOnClick: true });
    this.props.dispatch(refreshLogin());
  }
//this is the home button
  links = () => {
    return [
      { name: 'Home', path: '/' }
    ].map( (link, i) => {
      return this.link(i, link.name, link.path)
    })
  }
//this toggles the pathname to active/not
  link = (i, name, path) => {
    let activeClass = this.props.location.pathname === path ? 'active' : '';
    return (
      <li key={i} className={activeClass}>
        <Link to={path}>{name}</Link>
      </li>
    )
  }
// Logout link only shows up for logged in user...
// Else, show Login and Register buttons
  authLinks = () => {
    if (Object.keys(this.props.user).length) {
       let links = [
        ].map( (link, i) => {
          return this.link(i, link.name, link.path)
        });

        links.push(
          
            <li key="logout">
              <a
                href="/"
                onClick={ e => {
                  this.props.dispatch(logout(this.props.router))
                }}
              >
                Logout
              </a>
            </li>,
            <li key="myprofile">
              <Link to="/myprofile">
                My Profile
              </Link>
            </li>,
            <li key="profiles">
              <Link to="/profiles">
                Search
              </Link>
            </li>  
         
        )

      return links;
    } else {
      return [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
      ].map( (link, i) => {
        let active = this.props.location.pathname === link.path ? 'active' : '';
        return this.link(i, link.name, link.path)
      })
    }
  }
// This is our nav bar and mobile nav below
// the .authLinks only show when logged in, like Dashboard
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper #7986cb indigo lighten-2">
            <a href="/" className="brand-logo">Talent Swap</a>
            <a href="/" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              { this.links() }
              { this.authLinks() }
            </ul>
            <ul className="side-nav" id="mobile">
              { this.links() }
              { this.authLinks() }
            </ul>
          </div>
        </nav>
        <Flash />
        {this.props.children}
         <footer className="page-footer indigo lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Talent Swap</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Menu</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                  <li><a className="grey-text text-lighten-3" href="/login">Login</a></li>
                  <li><a className="grey-text text-lighten-3" href="/register">Register</a></li>
                  <li><a className="grey-text text-lighten-3" href="/">About</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Talent Swap Co.
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer> 
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);
