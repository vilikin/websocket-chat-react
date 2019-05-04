import "./LoginForm.css";
import React, { useContext } from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { Redirect, RouteComponentProps, withRouter } from "react-router";
import InputField from "../InputField/InputField";
import ChatClientContext from "../../client/ChatClientContext";
import { useMappedState } from "redux-react-hook";
import { AppState } from "../../store/reducers";

interface LoginFormProps extends RouteComponentProps {}

function LoginForm(props: LoginFormProps) {
  const { sendJoinRequest } = useContext(ChatClientContext);

  const onSubmit = (userName: string) => {
    sendJoinRequest(userName);
  };

  const { hasJoinedChannel } = useMappedState((state: AppState) => state.chat);

  if (hasJoinedChannel) {
    return <Redirect to="/chat" />;
  }

  return (
    <Row>
      <Col sm={{ size: 10, offset: 1 }}>
        <Card>
          <CardBody>
            <CardTitle>Join the chat</CardTitle>
            <InputField
              inputPlaceholderText="Enter a nickname..."
              buttonText="Join"
              onSubmit={onSubmit}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default withRouter(LoginForm);
