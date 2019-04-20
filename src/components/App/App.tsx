import React from 'react';
import './App.css';

import LoginForm from '../LoginForm/LoginForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "../Chat/Chat";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={LoginForm}/>
        <Route path="/chat" component={Chat}/>
      </Router>
    </div>
  );
};

export default App;
