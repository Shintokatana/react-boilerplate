import React, {Component} from 'react';
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
                About Page
                <Link to={'/'}>Home Page</Link>
            </div>
        );
    }
}

export default About;
