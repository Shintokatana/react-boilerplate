import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                Home Page
                <Link to={'/about'}>About Page</Link>
            </div>
        );
    }
}

export default Home;
