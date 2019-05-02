import { Broadcast } from "../client/ChatClient";

export interface ChatState {
  broadcasts: Broadcast[];
}

export const ADD_BROADCAST = "ADD_BROADCAST";

export interface AddBroadcastAction {
  type: typeof ADD_BROADCAST;
  payload: Broadcast;
}

export type ChatActionTypes = AddBroadcastAction;
