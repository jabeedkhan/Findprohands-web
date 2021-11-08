import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog, Location } from "./components/Pages/Location";
import { Contact } from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Privacy from "./components/Pages/Privacy";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
// import Location from './components/Pages/Location'
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  });

  return (
    <>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/location" component={Location} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
