import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import sideImage from "../assets/images/register-login-img.png";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  registerContainer: {
    minHeight: "100vh",
  },
  left: {
    background: "#ecf6ff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  leftImage: {
    maxWidth: "80%",
  },
  right: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  registerForm: {},
  margin: {
    margin: theme.spacing(1),
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
        className={classes.registerContainer}
      >
        {/* left section */}
        <Grid item xs={7}>
          <div className={classes.left}>
            <img
              src={sideImage}
              alt="image"
              className={classes.leftImage}
            ></img>
          </div>
        </Grid>
        {/* left section */}
        {/* right section */}
        <Grid item xs={5}>
          <div className={classes.right}>
            <div className={classes.registerForm}>
              <span class="material-icons">lock</span>
              <form>
                <TextField
                  className={classes.margin}
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className={classes.margin}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
                <TextField
                  className={classes.margin}
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
              </form>
            </div>
          </div>
        </Grid>
        {/* right section */}
      </Grid>
    </div>
  );
};

export default Register;
