import ChatClient, {
  Broadcast,
  BroadcastType,
  WebSocketEventType
} from "./ChatClient";
import { Store } from "redux";
import {
  addBroadcast,
  connect,
  disconnect,
  joinChannel
} from "../store/actions";
import { AppState } from "../store/reducers";

export function connectChatToStore(chatClient: ChatClient, store: Store) {
  chatClient.addBroadcastListener((broadcast: Broadcast) => {
    const { hasJoinedChannel } = (store.getState() as AppState).chat;
    if (broadcast.type == BroadcastType.USER_JOINED && !hasJoinedChannel) {
      store.dispatch(joinChannel(broadcast.userName));
    }

    store.dispatch(addBroadcast(broadcast));
  });

  chatClient.addWSEventListener((event: WebSocketEventType) => {
    switch (event) {
      case WebSocketEventType.CONNECT:
        store.dispatch(connect());
        return;
      case WebSocketEventType.DISCONNECT:
        store.dispatch(disconnect());
        return;
    }
  });
}
