import { combineReducers } from "redux";
import {
  ADD_BROADCAST,
  ChatActionTypes,
  ChatState,
  CONNECT,
  DISCONNECT,
  JOIN_CHANNEL,
  LEAVE_CHANNEL
} from "./types";

const initialState: ChatState = {
  broadcasts: [],
  isConnected: false,
  hasJoinedChannel: false
};

export const chatReducer = (
  state = initialState,
  action: ChatActionTypes
): ChatState => {
  switch (action.type) {
    case ADD_BROADCAST:
      return {
        ...state,
        broadcasts: [...state.broadcasts, action.payload]
      };
    case CONNECT:
      return {
        ...state,
        isConnected: true
      };
    case DISCONNECT:
      return {
        ...state,
        isConnected: false
      };
    case JOIN_CHANNEL:
      return {
        ...state,
        hasJoinedChannel: true,
        userName: action.payload
      };
    case LEAVE_CHANNEL:
      return {
        ...state,
        hasJoinedChannel: false,
        userName: undefined
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
