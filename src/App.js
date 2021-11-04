import React from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true}><Home /></Route>
      <Route path="/Login" component={Login}/>
    </HashRouter>
  )  
}

export default App;

