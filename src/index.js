import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router-dom";
import App from "./App";
import history from '../src/pages/components/history';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
ReactDOM.render(<Router history={history}>
    <App/>
</Router>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


