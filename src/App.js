import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import routes from "./routes";
import "./reset.css";
import "./App.css";
import {createStore} from 'redux'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to='/'>
              <h1>Recipe Cards</h1>
            </Link>
          </header>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
