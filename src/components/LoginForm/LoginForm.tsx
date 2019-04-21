import './LoginForm.css';
import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row
} from "reactstrap";
import { RouteComponentProps, withRouter } from "react-router";
import InputField from "../InputField/InputField";

interface LoginFormProps extends RouteComponentProps {}

function LoginForm(props: LoginFormProps) {
  const onSubmit = (text: string) => {
    props.history.push("/chat")
  };

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
