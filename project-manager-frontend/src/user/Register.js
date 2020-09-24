import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import sideImage from "../assets/images/register-login-img.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect } from "react-router-dom";
import { register } from "./apiCalls";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
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

const Register = () => {
  const classes = useStyles();
  const [submitBtnState, setSubmitBtnState] = useState(true);
  const [snackbarValues, setSnackbarValues] = useState({
    state: false,
    message: "",
    severity: "",
  });
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
    redirect: false,
  });
  const [loading, setLoading] = useState(false);
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
    register({ email, password })
      .then((data) => {
        setLoading(false);
        if (data.errorFlag) {
          setSnackbarValues({
            state: true,
            severity: "error",
            message: data.response,
          });
        } else {
          setFormdata({
            email: "",
            password: "",
            redirect: true,
          });
          setSnackbarValues({
            state: true,
            severity: "success",
            message: `User for email id ${data.response.email} is successfully created`,
          });
          // return <Redirect to="/login"></Redirect>;
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
      return <Redirect to="/login"></Redirect>;
    } else {
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
        <Grid item xs={7}>
          <div className={classes.left}>
            <img
              src={sideImage}
              alt="happy  man using laptop"
              className={classes.leftImage}
            ></img>
          </div>
        </Grid>
        {/* left section */}
        {/* right section */}
        <Grid item xs={5}>
          <div className={classes.right}>
            <div className={classes.registerForm}>
              {/* <span class="material-icons">lock</span> */}
              <h1>Register</h1>
              <form>
                <TextField
                  className={classes.margin}
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  type="email"
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
                    Create My Account
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
                Already have an account?{" "}
                <Link color="primary" to="/login">
                  Login here
                </Link>
              </p>
            </div>
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

export default Register;
