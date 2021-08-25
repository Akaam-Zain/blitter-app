import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import Profile from "./components/Profile";

function App() {
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
