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
import * as _ from "lodash";

function chunkBroadcastsBySender(broadcasts: Broadcast[]): Broadcast[][] {
  return broadcasts.reduce((result: Broadcast[][], current, index) => {
    if (index > 0 && current.type === BroadcastType.CHAT_MESSAGE) {
      console.log(result);
      console.log(current);
      const previous = result[result.length - 1];
      if (
        previous[0].type === BroadcastType.CHAT_MESSAGE &&
        previous[0].userId === current.userId
      ) {
        return [..._.initial(result), [...previous, current]];
      }
    }
    return [...result, [current]];
  }, []);
}

function mapBroadcastsToComponents(broadcasts: Broadcast[]) {
  const chunkedBroadcasts = chunkBroadcastsBySender(broadcasts);
  return chunkedBroadcasts.map(chunk => {
    const sample = chunk[0];
    switch (sample.type) {
      case BroadcastType.CHAT_MESSAGE:
        const rows = _.map(chunk, "message");
        return (
          <Message
            key={sample.timestamp}
            profilePictureUrl=""
            name={sample.userName}
            rows={rows}
          />
        );
      case BroadcastType.USER_JOINED:
        return (
          <JoinNotification key={sample.timestamp} userName={sample.userName} />
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
