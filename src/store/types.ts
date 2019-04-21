export interface Message {
  from: string;
  text: string;
}

export interface ChatState {
  messages: Message[];
}

export const ADD_MESSAGE = "ADD_MESSAGE";
export const RESET = "RESET";

export interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  payload: Message;
}

export interface ResetAction {
  type: typeof RESET;
}

export type ChatActionTypes = AddMessageAction | ResetAction;
