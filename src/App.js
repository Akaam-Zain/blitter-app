import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

import "./App.css";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginScreen}>
            {/** Login */}

            <LoginPage />
          </Route>
          <Route exact path="/home">
            {/*Home */}
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
