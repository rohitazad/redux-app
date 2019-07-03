import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import HeaderComp from "../Common/Header";
import FooterComp from "../Common/Footer";

import AboutComp from "../App/AboutUs/index";
import HomeComp from "../App/Home/index";
import CounterCompApp from "../App/CounterApp/index";
import ToDoAppComp from "../App/ToDoApp/index";
import NotFoundComp from "../App/NotFound/index";

class RoutesComponent extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <HeaderComp />
          <Switch>
            <Route exact path="/" component={HomeComp} />
            <Route path="/about" component={AboutComp} />
            <Route path="/simple-couter-app" component={CounterCompApp} />
            <Route path="/todo" component={ToDoAppComp} />
            <Route component={NotFoundComp} />
          </Switch>
          <FooterComp />
        </Router>
      </Fragment>
    );
  }
}
export default RoutesComponent;
