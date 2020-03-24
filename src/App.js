/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from "react";
import "./App.css";
import User from "./User";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserForm from './UserForm';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/edit/:id" component={UserForm} />
              <Route path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

class NotFound extends Component {
  render(){
    return <div>Not Found</div>
  }
}
