import { ADD_BROADCAST, ChatActionTypes } from "./types";
import { Broadcast } from "../client/ChatClient";

export function addBroadcast(broadcast: Broadcast): ChatActionTypes {
  return {
    type: ADD_BROADCAST,
    payload: broadcast
  };
}
