import React from 'react';
import './App.css';

import LoginForm from '../LoginForm/LoginForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "../Chat/Chat";
import { Container } from "reactstrap";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation/>
      <Container className="app">
        <Router>
          <Route path="/" exact component={LoginForm}/>
          <Route path="/chat" component={Chat}/>
        </Router>
      </Container>
    </>
  );
}

export default App;
