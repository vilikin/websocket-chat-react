import {
  ADD_BROADCAST,
  ChatActionTypes,
  CONNECT,
  DISCONNECT,
  JOIN_CHANNEL,
  LEAVE_CHANNEL
} from "./types";
import { Broadcast } from "../client/ChatClient";

export function addBroadcast(broadcast: Broadcast): ChatActionTypes {
  return {
    type: ADD_BROADCAST,
    payload: broadcast
  };
}

export function joinChannel(userName: string): ChatActionTypes {
  return {
    type: JOIN_CHANNEL,
    payload: userName
  };
}

export function leaveChannel(): ChatActionTypes {
  return {
    type: LEAVE_CHANNEL
  };
}

export function connect(): ChatActionTypes {
  return {
    type: CONNECT
  };
}

export function disconnect(): ChatActionTypes {
  return {
    type: DISCONNECT
  };
}
