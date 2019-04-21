import React from "react";
import "./Chat.css";

import { addMessage } from "../../store/actions";
import { useDispatch, useMappedState } from "redux-react-hook";
import { AppState } from "../../store/reducers";
import { Card } from "reactstrap";
import InputField from "../InputField/InputField";

function Chat() {
  const messages = useMappedState((state: AppState) => state.chat.messages);
  const dispatch = useDispatch();

  const send = (text: string) => {
    dispatch(
      addMessage({
        from: "tester",
        text
      })
    );
  };

  return (
    <Card className="chat">
      <div className="chat-messages">
        <ul>
          {messages.map(({ from, text }) => (
            <li>
              {from}: {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-input">
        <InputField
          inputPlaceholderText="Enter a message..."
          buttonText="Send"
          onSubmit={send}
        />
      </div>
    </Card>
  );
}

export default Chat;
