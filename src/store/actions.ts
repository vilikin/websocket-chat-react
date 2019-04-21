import { ADD_MESSAGE, ChatActionTypes, Message, RESET } from "./types";

export function addMessage(newMessage: Message): ChatActionTypes {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
  };
}

export function deleteMessage(): ChatActionTypes {
  return {
    type: RESET
  };
}
