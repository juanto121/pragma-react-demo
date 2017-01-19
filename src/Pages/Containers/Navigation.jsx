import React, {Component} from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
    render(){
        return(
            <nav role="navigation">
                <Link to="/">
                    Home
                </Link>
                <Link to="/posts">
                    posts
                </Link>
            </nav>
        );
    }
}

export default Navigation;