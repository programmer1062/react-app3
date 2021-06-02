import logo from "./logo.svg";
import "./App.css";

import { Home } from "./component/Home";
import { Project } from "./component/Project";
import { ContactUs } from "./component/ContactUs";
import { AboutUs } from "./component/AboutUs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <AppNavBar></AppNavBar>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/project">
          <Project></Project>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
