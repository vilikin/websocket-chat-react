import ChatClient, { Broadcast, WebSocketEventType } from "./ChatClient";
import { Store } from "redux";
import { addBroadcast } from "../store/actions";

export function connectChatToStore(chatClient: ChatClient, store: Store) {
  chatClient.addBroadcastListener((broadcast: Broadcast) => {
    store.dispatch(addBroadcast(broadcast));
  });

  chatClient.addWSEventListener((event: WebSocketEventType) => {
    console.log(`WS Event received: ${event}`);
  });
}
