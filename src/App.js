import React, { useEffect } from "react";
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
import Explore from "./components/Explore";

function App() {
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      dispatch(setUser(user));
    } else {
      console.log("No user logged in");
    }
  });

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      return dispatch(setPosts(snapshot.docs.doc.data()));
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
          <Route exact path="/signup">
            <LoginPage />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
