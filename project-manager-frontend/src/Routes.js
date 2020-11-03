// import { Dashboard } from "@material-ui/icons";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./pages/Dashboard";
import Base from "./components/Base";
import ProjectList from "./pages/projects/ProjectsList";
import ProtectedRoutes from "./helper/ProtectedRoutes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Register}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
        <ProtectedRoutes path="/dashboard" exact component={Dashboard}></ProtectedRoutes>
        <ProtectedRoutes path="/project-list" exact component={ProjectList}></ProtectedRoutes>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
