import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { logout } from "../user/apiCalls";

const Dashboard = ({ history }) => {
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <Button
        color="primary"
        onClick={() => {
          logout(() => {
            history.push("/");
          });
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
