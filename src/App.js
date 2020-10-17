import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from "./pages";
import SignIn from "./pages/SignIn";
import { ScrollToTop } from "./components/utils";

function App() {
  return (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/sign-in"} component={SignIn} />
        </Switch>
    </Router>
  );
}

export default App;
