import React from '/react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class About extends React.Component{

render(){
    return(
<h1> About page </h1>
    )
}
}
export default connect()(About); 