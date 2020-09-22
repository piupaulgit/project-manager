import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import sideImage from "../assets/images/login-img.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect, Route } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { authenticate, isAuthenticated, login } from "./apiCalls";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    maxWidth: "60%",
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
  btnWrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const Login = () => {
  const classes = useStyles();
  const { user } = isAuthenticated();
  const [submitBtnState, setSubmitBtnState] = useState(true);
  const [snackbarValues, setSnackbarValues] = useState({
    state: false,
    message: "",
    severity: "",
  });
  const [loading, setLoading] = useState(false);
  const [formData, setFormdata] = useState({
    email: "hello@123.com",
    password: "123",
    redirect: false,
  });
  const { email, password, redirect } = formData;
  const handleChange = (name) => (event) => {
    setFormdata({ ...formData, [name]: event.target.value });
    if (formData.email === "" || formData.password === "") {
      setSubmitBtnState(true);
    } else {
      setSubmitBtnState(false);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    login({ email, password })
      .then((data) => {
        setLoading(false);
        if (data.errorFlag) {
          setSnackbarValues({
            state: true,
            severity: "error",
            message: data.response,
          });
        } else {
          authenticate(data, () => {
            setFormdata({
              email: "",
              password: "",
              redirect: true,
            });
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        setSnackbarValues({
          state: true,
          severity: "error",
          message: "Somethingwent wrong, Please try again",
        });
      });
  };

  const performRedirect = () => {
    if (redirect) {
      return <Redirect to="/dashboard"></Redirect>;
    } else {
      // return <Redirect to="/"></Redirect>;
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarValues({ ...snackbarValues, state: false });
  };

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
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  value={email}
                  onChange={handleChange("email")}
                />
                <TextField
                  className={classes.margin}
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={handleChange("password")}
                />
                <div className={classes.btnWrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    className={classes.margin}
                    onClick={onSubmit}
                    disabled={submitBtnState || loading}
                  >
                    Login to Your Account
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
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
              alt="welcome "
              className={classes.leftImage}
            ></img>
          </div>
        </Grid>
        {/* right section */}
      </Grid>
      <Snackbar
        open={snackbarValues.state}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity={snackbarValues.severity}>
          {snackbarValues.message}
        </Alert>
      </Snackbar>
      {performRedirect()}
    </div>
  );
};

export default Login;
