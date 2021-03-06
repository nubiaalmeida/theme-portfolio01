import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import {Provider} from "overmind-react";
import {overmind} from './Utils/OvermindHelper'

ReactDOM.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <CssBaseline/>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
