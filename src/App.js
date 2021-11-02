import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from './routes/Home';
import Join from './routes/Join';

function App() {
  return (
    <HashRouter>
      <Route path="/" exac={true} component={Home} />
      <Route path="/Join" exact={true} component={Join} />
    </HashRouter>
  )
}

export default App;

