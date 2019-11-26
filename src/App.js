import React from 'react';
import {renderRoutes} from 'react-router-config';
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className={'content'}>
                    {renderRoutes(this.props.route.routes)}
                </div>
            </div>
        )
    }
}

export default connect()(App);
