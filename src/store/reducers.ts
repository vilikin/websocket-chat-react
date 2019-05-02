import { combineReducers } from "redux";
import { ADD_BROADCAST, ChatActionTypes, ChatState } from "./types";

const initialState: ChatState = {
  broadcasts: []
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

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
