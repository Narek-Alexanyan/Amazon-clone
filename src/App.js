import "./App.css";
import React from "react";

// components ### 
import Home from "./home/Home";

// routes ### 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
