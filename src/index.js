import {hot} from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {Provider} from 'react-redux';
import store from './Storage';
import * as serviceWorker from './serviceWorker';
import {routes} from "./Router";
import 'normalize.css';

const initApp = () => {
    return (
        render(
            <BrowserRouter>
                <Provider store={store}>
                    {renderRoutes(routes)}
                </Provider>
            </BrowserRouter>,
            document.getElementById('root'))
    )
};

process.env.NODE_ENV === 'development' ?
    hot(module)(initApp()) :
    initApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
