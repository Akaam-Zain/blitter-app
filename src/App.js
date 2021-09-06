import React, { useEffect, useHistory, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { setUser } from "./redux/userSlice";
import firebase from "firebase";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import db from "./firebase";
import { setPosts } from "./redux/postSlice";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch(setUser(user));
      } else {
      }
    });
  }, []);

  React.useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        const post = doc.data();
        post.id = doc.id;
        return post;
      });

      dispatch(setPosts(posts));
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginScreen}>
            {/** Login */}

            <LoginPage />
          </Route>
          {/*Home */}
          <Route exact path="/home">
            <HomeScreen />
          </Route>
          <Route exact path="/profile">
            <HomeScreen />
          </Route>
          <Route exact path="/explore">
            <HomeScreen />
          </Route>
          <Route exact path="/notifications">
            <HomeScreen />
          </Route>
          <Route exact path="/signup">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
