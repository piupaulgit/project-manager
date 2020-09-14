import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Register}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
