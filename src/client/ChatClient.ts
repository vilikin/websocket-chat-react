export enum WebSocketEventType {
  CONNECT = "CONNECT",
  DISCONNECT = "DISCONNECT",
  ERROR = "ERROR"
}

export enum MessageType {
  CHAT_MESSAGE = "CHAT_MESSAGE",
  JOIN_REQUEST = "JOIN_REQUEST"
}

export enum BroadcastType {
  CHAT_MESSAGE = "CHAT_MESSAGE",
  USER_JOINED = "USER_JOINED"
}

export interface ChatMessageBroadcast {
  type: BroadcastType.CHAT_MESSAGE;
  userId: string;
  userName: string;
  message: string;
  timestamp: string;
}

export interface UserJoinedBroadcast {
  type: BroadcastType.USER_JOINED;
  userId: string;
  userName: string;
  timestamp: string;
}

export type Broadcast = UserJoinedBroadcast | ChatMessageBroadcast;

export type BroadcastListener = (broadcast: Broadcast) => void;
export type WebSocketEventListener = (eventType: WebSocketEventType) => void;

export default class ChatClient {
  private ws: WebSocket;
  private isConnected: boolean = false;
  private broadcastListeners: BroadcastListener[] = [];
  private wsEventListeners: WebSocketEventListener[] = [];

  constructor() {
    this.ws = new WebSocket("ws://localhost:8080");

    this.ws.onopen = () => {
      this.isConnected = true;
      this.notifyWSEventListeners(WebSocketEventType.CONNECT);
    };

    this.ws.onerror = (event: any) => {
      console.error(`WebSocket error occurred: ${event}`);
      this.notifyWSEventListeners(WebSocketEventType.ERROR);
    };

    this.ws.onclose = () => {
      this.isConnected = false;
      this.notifyWSEventListeners(WebSocketEventType.DISCONNECT);
    };

    this.ws.onmessage = this.onBroadcast;
  }

  private onBroadcast = (event: MessageEvent) => {
    const broadcast = this.parseBroadcast(event.data);
    this.notifyBroadcastListeners(broadcast);
  };

  private parseBroadcast = (text: string): Broadcast => {
    return JSON.parse(text) as Broadcast;
  };

  private notifyBroadcastListeners = (broadcast: Broadcast) => {
    this.broadcastListeners.forEach(broadcastListener => {
      broadcastListener(broadcast);
    });
  };

  private notifyWSEventListeners = (wsEvent: WebSocketEventType) => {
    this.wsEventListeners.forEach(wsListener => {
      wsListener(wsEvent);
    });
  };

  public addBroadcastListener = (broadcastListener: BroadcastListener) => {
    this.broadcastListeners.push(broadcastListener);
  };

  public addWSEventListener = (wsEventListener: WebSocketEventListener) => {
    this.wsEventListeners.push(wsEventListener);
  };

  public send = (text: string) => {
    this.ws.send(text);
  };

  public sendChatMessage = (message: string) => {
    const body = JSON.stringify({
      type: MessageType.CHAT_MESSAGE,
      message
    });

    this.ws.send(body);
  };

  public sendJoinRequest = (userName: string) => {
    const body = JSON.stringify({
      type: MessageType.JOIN_REQUEST,
      userName
    });

    this.ws.send(body);
  };
}
