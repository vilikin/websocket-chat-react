import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import configureStore from "./store/store";
import { StoreContext } from 'redux-react-hook';

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
