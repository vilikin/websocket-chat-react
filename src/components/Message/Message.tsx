import React from "react";
import { Card } from "reactstrap";
import "./Message.css";

interface MessageProps {
  profilePictureUrl: string;
  name: string;
  rows: string[];
}

function Message(props: MessageProps) {
  return (
    <div className="message-container">
      <div className="profile-picture-container">
        <img
          alt="profile picture"
          src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        />
      </div>
      <div className="sender-and-message-container">
        <div className="sender">{props.name}</div>
        {props.rows.map(row => (
          <div className="message">{row}</div>
        ))}
      </div>
    </div>
  );
}

export default Message;
