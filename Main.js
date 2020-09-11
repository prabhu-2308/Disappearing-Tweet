import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DISHES from "./shared/dishes";
import Header from "./Header";
import Webp from "./Webp";
import Categ from "./Categ";
import Blog from "./Blog";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Webp} exact />
            <Route path="/c" component={Categ} />
            <Route path="/b" component={Blog} />
          </Switch>
          
          <DISHES />
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
