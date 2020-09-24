// import { Dashboard } from "@material-ui/icons";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./pages/Dashboard";
import Base from "./components/Base";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Register}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/base" exact component={Base}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
