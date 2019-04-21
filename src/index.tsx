import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import App from './components/App/App';
import configureStore from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore({
  chat: {
    messages: []
  }
});

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App/>
  </StoreContext.Provider>,
  document.getElementById('root')
);
