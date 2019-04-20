import './LoginForm.css';
import React, { useState } from 'react';

interface LoginFormProps {
  onJoin: (nickname: string) => void
}

function LoginForm(props: LoginFormProps) {
  const [nickname, setNickname] = useState("");

  const onNickChange = (event: any) => {
    setNickname(event.target.value);
  };

  const onSubmit = (event: any) => {
    props.onJoin(nickname);
  };

  return (
    <div className="login-form">
      <span className="title">Join the chat</span>
      <input className="input" type="text" value={nickname} onChange={onNickChange} />
      <button className="input" onClick={onSubmit}>Join</button>
    </div>
  );
}

export default LoginForm;
