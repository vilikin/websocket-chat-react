import { combineReducers } from "redux";
import { ADD_MESSAGE, ChatActionTypes, ChatState, RESET } from "./types";

const initialState: ChatState = {
  messages: []
};

export const chatReducer = (state = initialState, action: ChatActionTypes): ChatState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      };

    case RESET:
      return {
        messages: []
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;
