import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {/** Login */}

            <LoginPage />
          </Route>
          <Route path="/home">
            {/*Home */}
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
