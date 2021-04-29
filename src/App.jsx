import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
