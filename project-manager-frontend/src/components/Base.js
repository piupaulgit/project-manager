import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Base = ({children, title}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar title={title} mainContent={children}></Sidebar>
    </div>
  );
}

export default Base;
