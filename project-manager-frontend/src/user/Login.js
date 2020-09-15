import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import sideImage from "../assets/images/register-login-img.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

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
  registerForm: {
    maxWidth: "65%",
    textAlign: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const Login = () => {
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
        <Grid item xs={5}>
          <div className={classes.right}>
            <div className={classes.registerForm}>
              {/* <span class="material-icons">lock</span> */}
              <h1>Login</h1>
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
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  className={classes.margin}
                >
                  Create My Account
                </Button>
              </form>
              <p>
                Don't have an account?{" "}
                <Link color="primary" to="/register">
                  Create account here
                </Link>
              </p>
            </div>
          </div>
        </Grid>
        {/* left section */}
        {/* right section */}
        <Grid item xs={7}>
          <div className={classes.left}>
            <img
              src={sideImage}
              alt="image"
              className={classes.leftImage}
            ></img>
          </div>
        </Grid>
        {/* right section */}
      </Grid>
    </div>
  );
};

export default Login;
