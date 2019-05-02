import React, { useContext, useEffect, useRef } from "react";
import "./Chat.css";

import { useMappedState } from "redux-react-hook";
import { AppState } from "../../store/reducers";
import { Card } from "reactstrap";
import InputField from "../InputField/InputField";
import ChatClientContext from "../../client/ChatClientContext";
import { Broadcast, BroadcastType } from "../../client/ChatClient";
import Message from "../Message/Message";
import JoinNotification from "../JoinNotification/JoinNotification";

function mapBroadcastsToComponents(broadcasts: Broadcast[]) {
  return broadcasts.map(broadcast => {
    switch (broadcast.type) {
      case BroadcastType.CHAT_MESSAGE:
        return (
          <Message
            key={broadcast.timestamp}
            profilePictureUrl=""
            name={broadcast.userName}
            message={broadcast.message}
          />
        );
      case BroadcastType.USER_JOINED:
        return (
          <JoinNotification
            key={broadcast.timestamp}
            userName={broadcast.userName}
          />
        );
    }
  });
}

function Chat() {
  const messagesDiv = useRef(null);

  useEffect(() => {
    if (messagesDiv && messagesDiv.current) {
      (messagesDiv as any).current.scrollTop = (messagesDiv as any).current.scrollHeight;
    }
  });

  const { sendChatMessage } = useContext(ChatClientContext);
  const broadcasts = useMappedState((state: AppState) => state.chat.broadcasts);

  const send = (message: string) => {
    sendChatMessage(message);
  };

  return (
    <Card className="chat">
      <div className="chat-messages" ref={messagesDiv}>
        {mapBroadcastsToComponents(broadcasts)}
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
