import { Broadcast } from "../client/ChatClient";

export interface ChatState {
  broadcasts: Broadcast[];
  isConnected: boolean;
  userName?: string;
  hasJoinedChannel: boolean;
}

export const ADD_BROADCAST = "ADD_BROADCAST";
export const JOIN_CHANNEL = "JOIN_CHANNEL";
export const LEAVE_CHANNEL = "LEAVE_CHANNEL";
export const DISCONNECT = "DISCONNECT";
export const CONNECT = "CONNECT";

export interface AddBroadcastAction {
  type: typeof ADD_BROADCAST;
  payload: Broadcast;
}

export interface ConnectAction {
  type: typeof CONNECT;
}

export interface DisconnectAction {
  type: typeof DISCONNECT;
}

export interface JoinChannelAction {
  type: typeof JOIN_CHANNEL;
  payload: string;
}

export interface LeaveChannelAction {
  type: typeof LEAVE_CHANNEL;
}

export type ChatActionTypes =
  | AddBroadcastAction
  | ConnectAction
  | DisconnectAction
  | JoinChannelAction
  | LeaveChannelAction;
