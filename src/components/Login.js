import React from "react";
import Button from "@material-ui/core/Button";
import "./stlyes/Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";

function Login() {
  return (
    <div className="login">
      {/**  Logo */}
      <div>
        <TwitterIcon className="bleet__icon" />
      </div>

      {/**  Header Text */}
      <h2> Happening Now </h2>
      <h4>Join Blitter Today.</h4>

      {/**  Buttons */}
      <Button className="login__btn">
        <img
          className="login__btn_googleicom "
          alt=""
          src="https://pngimg.com/uploads/google/google_PNG19635.png"
        />{" "}
        Sign up with Google
      </Button>
      <Button className="login__btn">Sign up with email</Button>

      {/**  Footer Text */}
      <p>
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </p>
      <h5 className="login__text">
        Already have an account? <a href="/login">Login</a>
      </h5>
    </div>
  );
}

export default Login;
