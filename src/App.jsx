import React, { Component } from "react";
import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authentication";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-pro-react.css?v=1.2.0";
import { config } from "core";

let hist = createBrowserHistory();

const signinUrl = config.app.baseUrl + "signin";
const signupUrl = config.app.baseUrl + "signup";
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = signinUrl;
  }
} else {
  if (window.location.href !== signinUrl && window.location.href !== signupUrl) window.location.href = signinUrl;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={hist}>
            <div>
              {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component}/>;
              })}
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}