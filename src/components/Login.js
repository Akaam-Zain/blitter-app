import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./stlyes/Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link, useHistory, useLocation } from "react-router-dom";
import { googleAuthProvider } from "../service/SocialAuthMethods";
import { useAuthState } from "react-firebase-hooks/auth";
import socialMediaAuth from "../service/SocialAuth";
import { auth } from "../firebase";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../service/AuthContext";
import { LinearProgress } from "@material-ui/core";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  const onGoogleSignIn = async (provider) => {
    const user = await socialMediaAuth(provider);
    history.push("/home");
  };

  useEffect(() => {
    if (loading) {
      return <LinearProgress />;
    }
    if (user) history.replace("/home");
  }, [user, loading]);

  return (
    <div className="login">
      {/**  Logo */}
      <div>
        <TwitterIcon className="bleet__icon" />
      </div>
      {/**  Header Text */}
      <h2> Let's Bleet </h2>
      <h4>Join Blitter Today.</h4>
      {/**  Buttons */}
      {(() => {
        if (location.pathname === "/") {
          return (
            <div className="login__window">
              <Button
                className="login__btn"
                onClick={() => onGoogleSignIn(googleAuthProvider)}
              >
                <img
                  className="login__btn_googleicom "
                  alt=""
                  src="https://pngimg.com/uploads/google/google_PNG19635.png"
                />{" "}
                Sign in with Google
              </Button>
              <Button className="login__btn"> Sign in with email</Button>
              {/**  Footer Text */}
              <p>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
              <h5 className="login__text">
                Do not have an account?
                <Link to="/signup"> Sign Up</Link>
              </h5>
            </div>
          );
        } else if (location.pathname === "/signup") {
          return (
            <div>
              <div className="login__window">
                <Button
                  className="login__btn"
                  onClick={() => onGoogleSignIn(googleAuthProvider)}
                >
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
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy, including Cookie Use.
                </p>
                <h5 className="login__text">
                  Already have an account?
                  <Link to="/"> Login </Link>
                </h5>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Login;
