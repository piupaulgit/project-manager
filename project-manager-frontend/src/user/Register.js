import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import sideImage from "../assets/images/register-login-img.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
  const [formData, setFormData] = useState({
    formData,
  });
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
              {/* <span class="material-icons">lock</span> */}
              <h1>Register</h1>
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
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <TextField
                  className={classes.margin}
                  id="outlined-basic"
                  label="Confirm Password"
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
    </div>
  );
};

export default Register;
