import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">logout</a>
        </header> 

        <Route exact path="/" component={Login} />
        
        <PrivateRoute path='/private-route'>
          <BubblePage/>
        </PrivateRoute>

        {/* <Route path='/bubble-page'>
          <BubblePage/>
        </Route> */}

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute x
//2. Build the logout button to remove the localStorage Item.