import React from 'react';
import './App.css';

import LoginForm from '../LoginForm/LoginForm';
import { addMessage } from "../../store/actions";
import { useDispatch, useMappedState } from "redux-react-hook";
import { AppState } from "../../store/reducers";

const App = () => {
  const messages = useMappedState((state: AppState) => state.chat.messages);
  const dispatch = useDispatch();

  const send = () => {
    dispatch(addMessage({
      from: "tester",
      text: "this is a message"
    }));
  };

  return (
    <div className="app">
      <LoginForm onJoin={() => {}}/>
      <ul>
        {
          messages.map(message => <li>{message.from}: {message.text}</li>)
        }
      </ul>
      <button onClick={send}>Send</button>
    </div>
  );
};

export default App;
