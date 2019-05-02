import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "redux-react-hook";
import App from "./components/App/App";
import configureStore from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ChatClient from "./client/ChatClient";
import { connectChatToStore } from "./client/connect-chat-to-store";
import ChatClientContext from "./client/ChatClientContext";

const store = configureStore({
  chat: {
    broadcasts: []
  }
});

const chatClient = new ChatClient();
connectChatToStore(chatClient, store);

ReactDOM.render(
  <ChatClientContext.Provider value={chatClient}>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </ChatClientContext.Provider>,
  document.getElementById("root")
);
