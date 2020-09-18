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
  margin: {
    margin: theme.spacing(1),
  },
}));

const Register = () => {
  const classes = useStyles();
  const [snackbarValues, setSnackbarValues] = useState({
    state: false,
    message: "",
    severity: "",
  });
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const handleChange = (name) => (event) => {
    setFormdata({ ...formData, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    register({ email, password })
      .then((data) => {
        if (data.errorFlag) {
          // setFormdata({ ...formData, error: data.response });
          setSnackbarValues({
            state: true,
            severity: "error",
            message: data.response,
          });
        } else {
          setFormdata({
            email: "",
            password: "",
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
        console.log(err);
      });
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
                  required
                  onChange={handleChange("email")}
                />
                <TextField
                  className={classes.margin}
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={password}
                  required
                  onChange={handleChange("password")}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  className={classes.margin}
                  onClick={onSubmit}
                >
                  Create My Account
                </Button>
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
    </div>
  );
};

export default Register;
