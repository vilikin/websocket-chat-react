import React from "react";
import "./JoinNotification.css";

interface JoinNotificationProps {
  userName: string;
}

export function JoinNotification(props: JoinNotificationProps) {
  return (
    <div className="join-notification-container">
      <div className="join-notification">
        User <strong>{props.userName}</strong> joined the channel
      </div>
    </div>
  );
}

export default JoinNotification;
