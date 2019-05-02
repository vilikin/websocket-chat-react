import { createContext } from "react";

interface ChatClientContext {
  sendChatMessage: (message: string) => void;
  sendJoinRequest: (userName: string) => void;
}

const defaultValue = {} as ChatClientContext;

const ChatClientContext = createContext(defaultValue);

export default ChatClientContext;
