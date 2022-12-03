import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import EditQuestions from './components/EditQuestions';
import Register from "./components/Register";
import LogDay from './components/LogDay';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route>
        <Route path="/editQuestions">
          <Navbar />
          <EditQuestions />
        </Route>
        <Route path="/logDay">
          <Navbar />
          <LogDay />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
