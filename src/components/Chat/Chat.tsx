import React from 'react';
import './Chat.css';

import { addMessage } from "../../store/actions";
import { useDispatch, useMappedState } from "redux-react-hook";
import { AppState } from "../../store/reducers";

const Chat = () => {
  const messages = useMappedState((state: AppState) => state.chat.messages);
  const dispatch = useDispatch();

  const send = () => {
    dispatch(addMessage({
      from: "tester",
      text: "this is a message"
    }));
  };

  return (
    <div className="chat">
      <ul>
        {
          messages.map(({ from, text }) => <li>{from}: {text}</li>)
        }
      </ul>
      <button onClick={send}>Send message</button>
    </div>
  );
};

export default Chat;
