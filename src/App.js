import "./App.css";
import React from "react";

// redux ###
import { useSelector } from "react-redux";



// components ### 
import Home from "./pages/home/Home";

// routes ### 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// pages ###
import Navbar from "./components/navbar/Navbar";
import SignIn from "./pages/auth/sign-in/SignIn";




function App() {

  const navbar = useSelector(state => state.navbar)

  return (
    <Router>
      <div className="App">
        {navbar && <Navbar />}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
